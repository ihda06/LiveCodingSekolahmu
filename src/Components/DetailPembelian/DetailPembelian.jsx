import { HeaderSection } from "../HeaderSection/HeaderSection";
import {Row, Col} from "react-bootstrap"


export function DetailPembelian({ NoTagihan, Nama, Tanggal }) {
    return (
        <>
            <HeaderSection name="Detail Pembelian"></HeaderSection>
            <div className="content-section">
                <Row>
                    <Col xs={2}>
                        No tagihan
                    </Col>
                    <Col xs={1}>
                        :
                    </Col>
                    <Col xs={9}>
                        {NoTagihan}
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        Nama Pengguna
                    </Col>
                    <Col xs={1}>
                        :
                    </Col>
                    <Col xs={9}>
                        {Nama}
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        Tanggal Pembelian
                    </Col>
                    <Col xs={1}>
                        :
                    </Col>
                    <Col xs={9}>
                        {Tanggal}
                    </Col>
                </Row>
            </div>
        </>
    )

}