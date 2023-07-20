import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import NewsItem from "./NewsItem";
import axios from "axios";
import Loader from "./loader/Loader";


function News({pageSize,country,category}) {

  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async()=>{
    setLoading(true)
   await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7318709066c146dd9db6f91b76d0b583&pageSize=${pageSize}&page=${page}`)
   .then((res)=>setNews(res.data.articles
    ))
    .then(()=>{
      setLoading(false)
    })
  }

  const fetchData1 = async()=>{
    
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7318709066c146dd9db6f91b76d0b583&pageSize=${pageSize}&page=${page}`)
    .then((res)=>setTotalResult(res.data.totalResults
     ))
   }
  useEffect(()=>{
      fetchData()
    fetchData1()

    // const fetchData = axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7318709066c146dd9db6f91b76d0b583&pageSize=${pageSize}&page=${page}`).then((res)=>setNews(res.data.articles
    // ))

  },[])


  const handlePrevious = ()=>{
    setPage(page-1)
    fetchData()
  }

  const handleNext = ()=>{
    setPage(page+1)
    fetchData()
    console.log(totalResult,'Hiiiiiiiiiiiiiiii')
  }

    
  return (
    <Container style={{marginTop:'6rem'}} fluid>
      <h1  style={{textAlign:'center',fontSize:'50px',marginBottom:'40px',marginTop:'20px' , color:'gray'}}>News-Hunt <span style={{color:'black',textTransform:'capitalize',fontStyle:'italic'}}>{category} </span>Top Headlines</h1>
      {
        !loading ? <>
      <Row>
        {
          news.map((item)=>{
            return(
              <Col className="d-flex justify-content-center "  >
              <NewsItem title={item.title} description
={item.description
} urlToImage
={item.urlToImage} newsUrl={item.url } source= {item.source.name} publishedAt= {item.publishedAt} author={item.author}  />
             
            </Col>
            
            )
             
          })
          
        }
      </Row>
      </> 
      :<Loader/>
      }
      <div className="btn_container d-flex justify-content-between mt-3 mb-3 ">
    <Button variant="primary" disabled={page<=1} onClick={handlePrevious} size="md">&larr;Previous</Button>
    <Button variant="primary" disabled={page >= Math.ceil(totalResult/pageSize) } onClick={handleNext} size="sm">Next&rarr;</Button>
    </div>
    </Container>
  );
}

export default News;
