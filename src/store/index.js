import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext();

const INITIAL_STATE = {
  recipes: [
    {
      id: 1,
      recipeName: 'Espagueti rojo',
      imgURL:
        'https://editorialtelevisa.brightspotcdn.com/dims4/default/9943a52/2147483647/strip/true/crop/672x672+264+0/resize/2000x2000!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2022%2F05%2Fespagueti-con-jitomate.jpg',
      time: '25 min',
      ingredients: [
        {
          id: 1,
          quantity: '1',
          ingredient: 'paquete de espagueti',
        },
        {
          id: 2,
          quantity: '1/4',
          ingredient: 'de crema agria',
        },
        {
          id: 3,
          quantity: '1',
          ingredient: 'taza de puré de jitomate',
        },
        {
          id: 4,
          quantity: '1/4',
          ingredient: 'de mantequilla',
        },
        {
          id: 5,
          quantity: '1',
          ingredient: 'cubo de sazonador de pollo',
        },
        {
          id: 6,
          quantity: '',
          ingredient: 'Queso parmesano',
        },
        {
          id: 7,
          quantity: '',
          ingredient: 'Sal y pimienta al gusto',
        },
      ],
      concoction: [
        {
          step: 1,
          description:
            ' - Hierve 2 litros de agua y, cuando esté en su punto, agrega 2 cucharadas de sal. Posteriormente, cuece la pasta hasta que esté blanda.',
        },
        {
          step: 2,
          description: ' - Retira del fuego, cuela la pasta y desecha el agua.',
        },
        {
          step: 3,
          description:
            ' - Hierve el puré de jitomate a fuego lento y añade la crema, la mantequilla y el cubo sazonador.',
        },
        {
          step: 4,
          description: ' - Vierte el espagueti en la salsa y mezcla.',
        },
        {
          step: 5,
          description: ' - Sirve. Espolvorea con el queso parmesano al gusto.',
        },
      ],
      location: {
        latitude: 41.87194,
        longitude: 12.56738,
      },
    },
    {
      id: 2,
      recipeName: 'Roles de canela',
      imgURL:
        'https://editorialtelevisa.brightspotcdn.com/dims4/default/8020b81/2147483647/strip/true/crop/600x600+250+0/resize/2000x2000!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2022%2F09%2Freceta-roles-de-canela-los-mejores-companeros-de-una-taza-de-leche.jpg',
      time: '30 min',
      ingredients: [
        {
          id: 1,
          quantity: '115 g',
          ingredient: 'de mantequilla sin sal',
        },
        {
          id: 2,
          quantity: '1/2',
          ingredient: 'taza de azúcar morena',
        },
        {
          id: 3,
          quantity: '1',
          ingredient: 'cda. de canela molida',
        },
        {
          id: 4,
          quantity: '1/4',
          ingredient: 'de cdita. de sal',
        },
        {
          id: 5,
          quantity: '210g',
          ingredient: '(una barra) de queso crema cortado en cubos',
        },
        {
          id: 6,
          quantity: '2',
          ingredient: 'cditas. de vainilla',
        },
        {
          id: 7,
          quantity: '4',
          ingredient: 'tazas de azúcar glas',
        },
        {
          id: 8,
          quantity: '1/4',
          ingredient: 'de taza de agua tibia',
        },
        {
          id: 9,
          quantity: '1',
          ingredient: 'sobre (11 g o 2 cucharaditas) de levadura en polvo',
        },
        {
          id: 10,
          quantity: '3',
          ingredient: 'tazas de harina',
        },
        {
          id: 11,
          quantity: '1/4',
          ingredient: 'de taza de leche Santa Clara',
        },
        {
          id: 12,
          quantity: '1/4',
          ingredient: 'de taza de azúcar',
        },
        {
          id: 13,
          quantity: '1',
          ingredient: 'cucharadita de vainilla',
        },
        {
          id: 14,
          quantity: '2',
          ingredient: 'huevos grandes',
        },
        {
          id: 15,
          quantity: '1',
          ingredient: 'cucharadita de sal',
        },
        {
          id: 16,
          quantity: '1',
          ingredient: 'barra de mantequilla',
        },
      ],
      concoction: [
        {
          step: 1,
          description:
            ' - Poner la levadura en polvo en el agua tibia y cuando haga burbujas añade ½ taza de harina, el azúcar, la leche, los huevos, la vainilla y la sal.',
        },
        {
          step: 2,
          description:
            ' - Mezclar con la mano o a baja velocidad en la batidora mientras incorporas el resto de la harina. Déjala reposar unos minutos.',
        },
        {
          step: 3,
          description:
            ' - Amasar por 10 minutos o un poco menos en la batidora hasta que la masa ya no se te pegue en las manos. (Procura no amasar de más porque puede perder flexibilidad).',
        },
        {
          step: 4,
          description:
            ' - Añadir la mantequilla e integrar con las manos. Engrasar un tazón y colocar ahí la masa, taparla con una manta húmeda o un plástico y permite que aumente de tamaño durante hora y media.',
        },
        {
          step: 5,
          description:
            ' - Engrasar dos moldes para pan de caja. En una superficie enharinada extiende la masa hasta formar un rectángulo, untar el relleno de azúcar y canela, enrollar por el lado más largo y cortar en 8 o 12 pedazos. Acomodar en los moldes de pan y cubrir con una manta o con plástico.',
        },
        {
          step: 6,
          description: ' - Precalentar el horno a 180 ºC.',
        },
        {
          step: 7,
          description: ' - Dejar que la masa crezca durante una hora más.',
        },
        {
          step: 8,
          description:
            ' - En la bandeja de en medio, meter los roles hasta que estén doraditos.',
        },
        {
          step: 9,
          description:
            ' - Sacar del horno, dejar que se enfríen un poco y con una brocha agregar el glaseado.',
        },
      ],
      location: {
        latitude: 60.128161,
        longitude: 18.643501,
      },
    },
    {
      id: 3,
      recipeName: 'Camarones a la diabla',
      imgURL:
        'https://editorialtelevisa.brightspotcdn.com/dims4/default/f0a6cf5/2147483647/strip/true/crop/2800x2800+1100+0/resize/2000x2000!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2F2d%2F3d%2F9bcf0fb849de849b20052e1b7432%2Fcf-camarones-a-la-diabla-c.jpg',
      time: '20 min',
      ingredients: [
        {
          id: 1,
          quantity: '5',
          ingredient: 'chiles guajillo remojados',
        },
        {
          id: 2,
          quantity: '1',
          ingredient: 'chile ancho remojado',
        },
        {
          id: 3,
          quantity: '15',
          ingredient: 'chiles de árbol remojados',
        },
        {
          id: 4,
          quantity: '1 kg',
          ingredient: 'de camarones limpios',
        },
        {
          id: 5,
          quantity: '4',
          ingredient: 'ajos asados',
        },
        {
          id: 6,
          quantity: '3',
          ingredient: 'limones amarillos',
        },
        {
          id: 7,
          quantity: '200 g',
          ingredient: 'de espárragos',
        },
        {
          id: 8,
          quantity: '',
          ingredient: 'Mayonesa de chipotle',
        },
      ],
      concoction: [
        {
          step: 1,
          description:
            ' - Licua los chiles con suficiente agua, sazona a tu gusto. Reserva.',
        },
        {
          step: 2,
          description:
            ' - En un grill caliente; coloca aceite, limones, espárragos y los camarones. Con ayuda de una brocha cubre los camarones con el adobo y cocina por ambos lados.',
        },
        {
          step: 3,
          description:
            ' - Sirve los camarones y espárragos acompañados de mayonesa de chipotle.',
        },
      ],
      location: {
        latitude: 15.199999,
        longitude: -86.241905,
      },
    },
    {
      id: 4,
      recipeName: 'Flan de coco',
      imgURL:
        'https://editorialtelevisa.brightspotcdn.com/dims4/default/c980fff/2147483647/strip/true/crop/560x560+220+0/resize/2000x2000!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2019%2F09%2Fflan-de-coco.jpg',
      time: '2 horas',
      ingredients: [
        {
          id: 1,
          quantity: '4',
          ingredient: 'huevos',
        },
        {
          id: 2,
          quantity: '3/4',
          ingredient: 'taza de crema de coco',
        },
        {
          id: 3,
          quantity: '3/4',
          ingredient: 'taza de leche de coco',
        },
        {
          id: 4,
          quantity: '1/2',
          ingredient: 'taza de azúcar',
        },
        {
          id: 5,
          quantity: '1/2',
          ingredient: 'taza de coco tostado',
        },
        {
          id: 6,
          quantity: '1/2',
          ingredient: 'taza de granada',
        },
        {
          id: 7,
          quantity: '10',
          ingredient: 'hojas de menta',
        },
      ],
      concoction: [
        {
          step: 1,
          description: ' - Licua los huevos con la crema y leche de coco.',
        },
        {
          step: 2,
          description:
            ' - Calienta el azúcar en una sartén hasta que obtenga un color dorado, vierte en un molde y pon encima la mezcla para el flan.',
        },
        {
          step: 3,
          description: ' - Hornea a 130o C durante 1 hora a baño María.',
        },
        {
          step: 4,
          description: ' - Deja enfriar por completo y voltea.',
        },
        {
          step: 5,
          description: ' - Termina con el coco, granada y hojas de menta.',
        },
      ],
      location: {
        latitude: 19.18095,
        longitude: -96.1429,
      },
    },
    {
      id: 5,
      recipeName: 'Aguachile verde',
      imgURL:
        'https://editorialtelevisa.brightspotcdn.com/dims4/default/bba073d/2147483647/strip/true/crop/672x672+264+0/resize/2000x2000!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fd0%2F96%2F33c391194eaf9d279cbad39cc310%2Faguachile-verde.jpg',
      time: '10 min',
      ingredients: [
        {
          id: 1,
          quantity: '1/2',
          ingredient: 'taza de jugo de limón',
        },
        {
          id: 2,
          quantity: '4',
          ingredient: 'cdas. de vinagre blanco',
        },
        {
          id: 3,
          quantity: '2',
          ingredient: 'tomates',
        },
        {
          id: 4,
          quantity: '1',
          ingredient: 'chile habanero',
        },
        {
          id: 5,
          quantity: '2',
          ingredient: 'chiles serrano',
        },
        {
          id: 6,
          quantity: '5',
          ingredient: 'ramitas de cilantro',
        },
        {
          id: 7,
          quantity: '1',
          ingredient: 'ajo',
        },
        {
          id: 8,
          quantity: '1 kg',
          ingredient: 'de camarones limpios',
        },
        {
          id: 9,
          quantity: '1/2',
          ingredient: 'taza de pepino picado',
        },
        {
          id: 10,
          quantity: '1/4',
          ingredient: 'taza de cebolla morada',
        },
        {
          id: 11,
          quantity: '',
          ingredient: 'Tostadas',
        },
      ],
      concoction: [
        {
          step: 1,
          description: ' - Licua todos los ingredientes del agua chile.',
        },
        {
          step: 2,
          description:
            ' - En un tazón grande coloca los camarones, agrega la salsa de aguachile y mezcla muy bien. Reserva en refrigeración y deja marinar por 30 minutos.',
        },
        {
          step: 3,
          description:
            ' - Agrega pepino, cebolla y mezcla hasta integrar. Sirve acompañado de tostadas.',
        },
      ],
      location: {
        latitude: 23.2329,
        longitude: -106.4062,
      },
    },
  ],
  recipeSelected: null,
};

class ContextStore extends Component {
  changeRecipe = recipeSelected => {
    this.setState({recipeSelected});
  };

  state = {
    ...INITIAL_STATE,
    changeRecipe: this.changeRecipe,
  };

  render() {
    return <Provider value={this.state}>{this.props.comp}</Provider>;
  }
}

const WrapperConsumer = Component => {
  return props => {
    return (
      <Consumer>
        {context => <Component {...props} context={context} />}
      </Consumer>
    );
  };
};

export default WrapperConsumer;
export {ContextStore};
