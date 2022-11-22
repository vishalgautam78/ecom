import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class FeaturedProduct extends Component {
  render() {
    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>FEATURED PRODUCT</h2>
                    <p>Some of our exclusive collection, you may like</p>
                </div>            
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default FeaturedProduct