import { useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Tela, Cronometo, Titulo, SecaoBotoes, BotaoCronometro, TextoCronometro, TituloSetter, BotaoTimer, TextoMinutos, TelaTimer, TextoBotao } from './src/components/index'
import { MoveDown, MoveUp, Play, RotateCw, Square  } from 'lucide-react-native';

export default function App() {
  const [timer, setTimer] = useState(0)
  const [iniciar, setIniciar] = useState(false)
  const [trabalho, setTrabalho] = useState(0)
  const [descanso, setDescanso] = useState(0)
  const [trabalhoAtivo, setTrabalhoAtivo] = useState(true)
  const [descansoAtivo, setDescansoAtivo] = useState(true)
  const [key, setKey] = useState(0)
  const [terminou, setTerminou] = useState(false)

  const colors = {
    ativo: "#f84434",
    inativo: "#474f4f",
    descanso: "#40a444"
  }

  function timerTrabalhoEDescanso(tipo, operacao) {
  if (tipo == "trabalho") {
    if (operacao == 1) {
      setTrabalho(trabalho + 1);
      setTimer((trabalho + 1) * 60);
    } else if (trabalho > 0) {
      setTrabalho(trabalho - 1);
      setTimer((trabalho - 1) * 60);
    }
  } else if (tipo == "descanso") {
    if (operacao == 1) {
      setDescanso(descanso + 1);
    } else if (descanso > 0) {
      setDescanso(descanso - 1);
    }
  }
}

  function verificaCronometro() {
    if(!terminou) {
      colors.ativo = "#40a444"
      setTrabalhoAtivo(!trabalhoAtivo)
      setTimer(!descansoAtivo ? trabalho * 60 : descanso * 60)
      setDescansoAtivo(!descansoAtivo)
      setTerminou((prevTerminou) => {
        !prevTerminou
        setKey((prevKey) => prevKey + 1)
      })
    }
  }

  const getButtonStyle = (isActive) => {
    if(descansoAtivo) return {backgroundColor: isActive ? colors.ativo : colors.inativo};
    else if(trabalhoAtivo) return {backgroundColor: isActive ? colors.descanso : colors.inativo}
};

  return (
    <>
      <Tela style={{backgroundColor: descansoAtivo ? colors.ativo : colors.descanso}}>
        <Titulo>Hora de {descansoAtivo ? "Trabalho" : "Descanso"}</Titulo>
          <CountdownCircleTimer
            key={key}
            isPlaying={iniciar}
            duration={timer}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
              verificaCronometro()
              return{shouldRepeat: true}
            }}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60)
              const seconds = remainingTime % 60

              return <TextoCronometro>{minutes}:{seconds}</TextoCronometro>
            }}
          </CountdownCircleTimer>
          <SecaoBotoes>
            <BotaoCronometro onPress={() => [setIniciar(!iniciar), setTrabalhoAtivo(!trabalhoAtivo)]}>
              {!iniciar ? <Play/> : <Square/>}
              {!iniciar ? <TextoBotao>Iniciar</TextoBotao> : <TextoBotao>Parar</TextoBotao>}
            </BotaoCronometro>
            <BotaoCronometro onPress={() => [setKey((prevKey) => prevKey + 1), setTimer(trabalho * 60)]}>
              <RotateCw/>
              <TextoBotao>Reiniciar</TextoBotao>
            </BotaoCronometro>
          </SecaoBotoes>
      </Tela>
      <Cronometo>
        <TelaTimer>
          <TituloSetter>Trabalho</TituloSetter>
          <BotaoTimer style={getButtonStyle(trabalhoAtivo)} disabled={!trabalhoAtivo} onPress={() => timerTrabalhoEDescanso("trabalho", 1)}>
            <MoveUp color={'white'}/>
          </BotaoTimer>
          <TextoMinutos>{trabalho} minutos</TextoMinutos>
          <BotaoTimer style={getButtonStyle(trabalhoAtivo)} disabled={!trabalhoAtivo} onPress={() => timerTrabalhoEDescanso("trabalho", -1)}>
            <MoveDown color={'white'}/>
          </BotaoTimer>
        </TelaTimer>

        <TelaTimer>
          <TituloSetter>Descanso</TituloSetter>
          <BotaoTimer style={getButtonStyle(descansoAtivo)} disabled={!descansoAtivo} onPress={() => timerTrabalhoEDescanso("descanso", 1)}>
            <MoveUp color={'white'}/>
          </BotaoTimer>
          <TextoMinutos>{descanso} minutos</TextoMinutos>
          <BotaoTimer style={getButtonStyle(descansoAtivo)} disabled={!descansoAtivo} onPress={() => timerTrabalhoEDescanso("descanso", -1)}>
            <MoveDown color={'white'}/>
          </BotaoTimer>
        </TelaTimer>
      </Cronometo>
    </>
  );
}