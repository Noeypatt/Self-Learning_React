import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLike } from '../redux/discovery/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardText, CardBody, CardFooter, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const Discovery = () => {

    const data = useSelector(state => state.card)
    const action = bindActionCreators({ ...setLike }, useDispatch())

    const handlerLike = () => {

    }


    return (
        <div className="warp-discovery">
            <div className="discovery-title">
                <h5>Discovery</h5>
                <p>View all<FontAwesomeIcon icon={faAngleRight} /></p>
            </div>

            <div className="discovery-content">

                {
                    data.card.map((item, index) => {
                        return (
                            <Card className="hvr-grow" key={index}  >
                                <CardImg top width="100%" src={item.img} alt={`Img-${index}`} />
                                <CardBody>
                                    <CardText>{item.location}</CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <CardText href="">{item.count} Like</CardText>
                                    <span className={`icon icon-${!item.status ? item.icon : item.active}`}
                                        onClick={
                                            handlerLike(item.id)
                                        }
                                    >
                                    </span>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
            <div className="discovery-footer" >
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="" />
                    </PaginationItem>
                    <PaginationItem >
                        <PaginationLink href="">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="" />
                    </PaginationItem>
                </Pagination>

            </div>
        </div >
    )
}
export default Discovery;