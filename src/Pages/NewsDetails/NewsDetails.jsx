import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import edition1 from '../../assets/editorsInsight1.png'
import edition2 from '../../assets/editorsInsight2.png'
import edition3 from '../../assets/editorsInsight3.png'
import moment from 'moment';

const NewsDetails = () => {
    const news = useLoaderData();
    const { image_url, title, details, } = news;

    return (
        <Container>
            <p>The Dragon news:</p>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link className='btn btn-danger' to="/categorynews/0">Back to Home</Link>
                </Card.Body>
            </Card>
            <div className='mt-4'>
                <h3>Latest news for you</h3>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={edition1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={edition2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={edition3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{moment().format('dd, MMMM YYYY')}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </Container>
    );
};

export default NewsDetails;