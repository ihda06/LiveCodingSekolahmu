import { HeaderSection } from "../HeaderSection/HeaderSection";
import {Card} from "react-bootstrap"

export function PembayaranBerhasil({tanggal, paymentChannel, paymentChannelDetails}) {
    return(
        <>
        <HeaderSection name="Pembayaran Berhasil"></HeaderSection>
        <div className="content-section">
            <span>Tanggal Pembayaran : {tanggal}</span>
            <Card className="mt-3">
                <Card.Header>
                    <div className="subtitle">
                    Metode Pembayaran
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div className="subtitle">
                        {paymentChannel}
                    </div>
                    <div className="bank">
                        {paymentChannelDetails}
                    </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    )
    
}