import { HeaderSection } from "../HeaderSection/HeaderSection";
import { Card, Row, Col } from "react-bootstrap";

export function DetailProgram({ list }) {
    return (
        <>
            <HeaderSection name="Detail Program"></HeaderSection>
            <div className="content-section">
                <span>Penyedia Program : <a href="https://sekolah.mu">Sekolah.Mu</a></span>
                <Card className="mt-4">
                    <Card.Body>
                        {
                            // console.log(list[0].programs)
                            list[0].programs.map(item => {
                                return (
                                    <Row className="py-2">
                                        <Col lg={10}>
                                            {item.details.name}
                                        </Col>
                                        <Col lg={2}>
                                            Rp. {item.amount}
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col xs={10}>Subtotal</Col>
                            <Col xs={2}>Rp. </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )

}