import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';
function NewsItem({title,description,urlToImage,newsUrl,source,publishedAt,author}) {
   const demoImg = 'https://cdn3.vectorstock.com/i/1000x1000/37/07/not-available-sign-or-stamp-vector-22523707.jpg'
  return (

    <div>
      
      <Card style={{ width: '25rem',marginBottom:'15px', height:'29rem' ,backgroundColor:'#f5ead5' }}>
      <Card.Img variant="top" style={{height:'200px', width:'25rem'}} src={urlToImage?urlToImage:demoImg} />
      <Badge style={{zIndex:'10'}} bg="danger">{source}</Badge>
      <Card.Body>
        <Card.Title>{title?title.slice(0,80)+'...':'demo title'}</Card.Title>
        <Card.Text>
         {description?description.slice(0,90)+'...':'News is information about current events. This may be provided through many different media: word of mouth. '}
        </Card.Text>
        <p>{new Date(publishedAt).toGMTString()}</p>
        <a  target='_blank' href={newsUrl} >
        <Button style={{zIndex:'10'}} className='btn-sm' variant="dark">Read more...</Button>
        </a>
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default NewsItem
