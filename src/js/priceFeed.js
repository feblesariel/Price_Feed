const providerUrl = 'COMPLETAR'; // <------- url + infura apikey
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

const contractABI = ["COMPLETAR"]; // <------- abi contract

const contractAddress = 'COMPLETAR'; // <-------------- contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Variables para almacenar los valores anteriores
let prevPriceBTC = null;
let prevPriceETH = null;
let prevPriceEUR = null;

// Función para obtener y actualizar los precios
async function updatePrices() {

    try {
        // Llama a la función del contrato para obtener los precios
        const btcData = await contract.methods.get_BTC_USD_Data().call();
        const ethData = await contract.methods.get_ETH_USD_Data().call();
        const eurData = await contract.methods.get_EUR_USD_Data().call();

        // Formatear el precio para mostrarlo con 2 decimales
        const formattedPriceBTC = (btcData.answer / 10 ** btcData.decimals).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const formattedPriceETH = (ethData.answer / 10 ** ethData.decimals).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const formattedPriceEUR = (eurData.answer / 10 ** eurData.decimals).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Actualiza el HTML con los resultados formateados
        document.getElementById('btc').textContent = `$ ${formattedPriceBTC}`;
        document.getElementById('eth').textContent = `$ ${formattedPriceETH}`;
        document.getElementById('eur').textContent = `$ ${formattedPriceEUR}`;

        // Compara los valores anteriores y actuales para aplicar el color adecuado
        if (prevPriceBTC !== null && formattedPriceBTC > prevPriceBTC) {
            document.getElementById('btc').classList.add('text-success'); // Verde
            document.getElementById('btc').classList.remove('text-danger'); // Elimina rojo si estaba aplicado
        } else if (prevPriceBTC !== null && formattedPriceBTC < prevPriceBTC) {
            document.getElementById('btc').classList.add('text-danger'); // Rojo
            document.getElementById('btc').classList.remove('text-success'); // Elimina verde si estaba aplicado
        }

        if (prevPriceETH !== null && formattedPriceETH > prevPriceETH) {
            document.getElementById('eth').classList.add('text-success'); // Verde
            document.getElementById('eth').classList.remove('text-danger'); // Elimina rojo si estaba aplicado
        } else if (prevPriceETH !== null && formattedPriceETH < prevPriceETH) {
            document.getElementById('eth').classList.add('text-danger'); // Rojo
            document.getElementById('eth').classList.remove('text-success'); // Elimina verde si estaba aplicado
        }

        if (prevPriceEUR !== null && formattedPriceEUR > prevPriceEUR) {
            document.getElementById('eur').classList.add('text-success'); // Verde
            document.getElementById('eur').classList.remove('text-danger'); // Elimina rojo si estaba aplicado
        } else if (prevPriceEUR !== null && formattedPriceEUR < prevPriceEUR) {
            document.getElementById('eur').classList.add('text-danger'); // Rojo
            document.getElementById('eur').classList.remove('text-success'); // Elimina verde si estaba aplicado
        }

        // Actualiza los valores anteriores
        prevPriceBTC = formattedPriceBTC;
        prevPriceETH = formattedPriceETH;
        prevPriceEUR = formattedPriceEUR;

    } catch (error) {
        console.error('Error al actualizar los precios:', error);
    }
}

// Llama a la función para actualizar los precios cada 1 segundos
setInterval(updatePrices, 1000); // 1 segundo en milisegundos