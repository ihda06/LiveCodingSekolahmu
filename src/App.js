import logo from './logo.png';
import './App.css';

// {"Authorization": "secret_auth_token!!$$"}
// https://api.dev.sekolah.mu/se-test/invoice

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DetailPembelian } from './Components/DetailPembelian/DetailPembelian';
import { PembayaranBerhasil } from './Components/PembayaranBerhasil/PembayaranBerhasil';
import { DetailProgram } from './Components/DetailProgram/DetailProgram';


function App() {
  const [data, setData] = useState([])


  const getData = async () => {
    const res = await axios.get("https://api.dev.sekolah.mu/se-test/invoice", {
      headers: {
        "Authorization": "secret_auth_token!!$$"
      }
    })
    const data = await res.data.data.data
    console.log(data);
    // console.log(data.items[0].programs);
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Container className='text-start my-5 p-3' style={{ maxWidth: "1000px", backgroundColor: "white" }}>
        <div className="logo my-4">
          <img src={logo} alt="" srcset="" style={{ maxWidth: 100 }} />
        </div>
        <section>
          <DetailPembelian NoTagihan={data.full_id} Nama={data.name} Tanggal={data.created_at}/>
        </section>
        <section>
          <PembayaranBerhasil tanggal={data.full_id} paymentChannel={data.payment_channel} paymentChannelDetails={data.payment_channel_detail}></PembayaranBerhasil>
        </section>
        <section>
          <DetailProgram list={data.items} subtotal={data.total_amount}></DetailProgram>
        </section>
        
        
      </Container>
    </div>
  );
}

export default App;
