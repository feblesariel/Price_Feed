![imagen](src/assets/promo.png)

## Descripción

La dApp web proporciona los precios en tiempo real de las criptomonedas BTC/USD y ETH/USD. Esta información se obtiene de manera confiable y precisa a través de la consulta a un oráculo de Chainlink, el cual está vinculado a nuestro contrato inteligente desplegado en la red Ethereum.

**Nota:** La actual configuracion inicial es sobre la red testnet Goerli. Antes de deployar con el comando "migrate" configurar datos requeridos mas abajo y asegurarse que la cuenta con cual se hará la transaccion tenga fondos para pagar el gas.

Se utilizaron las siguientes tecnologias y librerias:

nodejs<br>
solidity<br>
truffle<br>
javascript<br>
html<br>
css<br>
bootstrap<br>
@chainlink/contracts<br>
@truffle/hdwallet-provider<br>

## Iniciar dApp

Instalar

```
  git clone https://github.com/feblesariel/Price_Feed.git
  npm install  
    
```
Configurar

**Nota:** Antes de la compilacion con el comando "migrate", configurar el archivo truffle-config.js (infura apikey, private key account y network). Despues de la compilacion añadir al archivo priceFeed.js ( path infura+apikey, abi y direccion del contrato).

```
  truffle console --network goerli
  migrate

```
Iniciar

```
  index.html

```