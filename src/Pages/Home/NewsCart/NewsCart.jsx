import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, author, details, image_url, title, total_view, rating } = news;
    return (
        <Card className="">
            <Card.Header className='d-flex align-items-center'>
                <img style={{height:"40px"}} src={author.img} alt="" />
                <div className='ms-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small className='mt-0'>{moment(author.published_date).format('ddd, MMM D YYYY')}</small></p>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <img className='w-100' src={image_url} alt="" />
                <Card.Text>
                   {details.length < 250 ? details : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>read more</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex'>
                    <p className='flex-grow-1'>{rating.number}</p>
                    <p><FaEye></FaEye> {total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;