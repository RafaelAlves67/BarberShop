import './Main.css'
import Cortando from '../assets/cortando.png'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'


const Main = () => {

  return (
    <main>
      <h1 className='my-4'>Conheça a nossa Barbearia</h1>

      <div className='d-flex flex-column justify-content-center align-items-center bg-secondary div-sobre'>
        <div className='d-flex flex-row w-50 justify-content-around w-100 p-5 div-sobre'>
          <img src={Cortando} className="img-cortando" alt="Imagem de alguem cortando" />

          <div className='div-p-sobre ms-5'>
              <p className='p-sobre'>
                      Desde 2003 a Barber Shop traz para Contagem e região um ambiente de  barbearia moderna, oferecendo serviços de alta qualidade em ambientes planejados para receber os clientes com a descontração e conforto que merecem.
              </p>

              <p className='p-sobre'>Na Barber Shop o cliente tem uma experiência completa! A equipe está preparada para atender e garantir total satisfação!</p>
              
              <p className='p-sobre'>Agenda seu horário conosco e venha fazer parte da nossa família.</p>
              
          </div>
        </div>

        <h4 className='py-3 text-warning'>QUALIDADE E ATENDIMENTO COM PROFISSIONAIS EXCEPCIONAIS!</h4>
      </div>


      {/* SESSAO UNIDADES */}
      <h1 className='my-4'>UNIDADES</h1>

      <div className='cards d-flex flex-row justify-content-around p-4 div-cards'>
        <div className="card">
          <img src={Card1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Unidade Contagem</h5>
            <p className="card-text">Unidade tradicional com vários anos de funcionamento e qualidade no atendimento e serviço.</p>
            <a href="#" className="btn btn-primary">Conheça</a>
          </div>
        </div>


        <div className="card">
          <img src={Card2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Unidade Belo Horizonte</h5>
            <p className="card-text">Nossa mais nova unidade, aberta em Fevereiro de 2024, toda experiência e qualidade para você trazer sua família e amigos.</p>
            <a href="#" className="btn btn-primary">Conheça</a>
          </div>
        </div>

      </div>

      {/* FOTOS DE SERVIÇOS */}
      <div className='d-flex flex-row justify-content-between div-imgs-servico my-4'>
        <img src={img1} alt="" className='img-servico' />
        <img src={img2} alt="" className='img-servico' />
        <img src={img3} alt="" className='img-servico' />
      </div>

      <div className='d-flex flex-row my-4'>
            <h1>Localização no mapa</h1>
      </div>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5651768546204!2d-44.058946425935204!3d-19.942720238702442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695825b323319%3A0x1e6fb1b3fc41bc6a!2sPrimo&#39;s%20Barber%20Shop!5e0!3m2!1spt-BR!2sbr!4v1712927741633!5m2!1spt-BR!2sbr" width="900" height="450" loading="lazy"></iframe>
      </div>
    </main>
  )
}

export default Main