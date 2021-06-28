let defaultTimer = 0;

const pipoca =_=> defaultTimer = 10;
const macarrão =_=> defaultTimer = 8;
const carne =_=> defaultTimer = 15;
const feijão =_=> defaultTimer = 12;
const brigadeiro =_=> defaultTimer = 8;

const menuMicroondas = timer => {
    if (timer == pipoca) {
        pipoca();
        console.log('Prato pronto, bom apetite!!!')
    }
    else if (timer == macarrão) {
        macarrão();        
        console.log('Prato pronto, bom apetite!!!')
    } 
    else if (timer == carne) {
        carne();        
        console.log('Prato pronto, bom apetite!!!')
    }
    else if (timer == macarrão) {
        macarrão();        
        console.log('Prato pronto, bom apetite!!!')
    }
    else if (timer == feijão) {
        feijão();        
        console.log('Prato pronto, bom apetite!!!')
    }
    else if (timer == brigadeiro) {
        brigadeiro();        
        console.log('Prato pronto, bom apetite!!!')
    }
    //tempo personalizado pelo usuário
    else if (timer >= 3*15 ) {
        defaultTimer = timer;
        console.log('Kabumm!!!')
    }
    else if (timer >= 2*15){ 
        defaultTimer = timer;
        console.log('Sua comida queimou')
    }
    else if (timer <= 7) {
        defaultTimer = timer;
        console.log('Tempo insuficiente')
    }
    else if (timer != 10 && pipoca || macarrão || carne || feijão || brigadeiro ) {
        console.log('Prato inexistente')
    }
};


menuMicroondas(7);
menuMicroondas(pipoca);
menuMicroondas(feijão);
menuMicroondas(31);
menuMicroondas(100);
menuMicroondas('arroz');
