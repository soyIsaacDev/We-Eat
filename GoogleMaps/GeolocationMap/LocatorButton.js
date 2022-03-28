// components/LocatorButton.js
// Permite Typechecking
import PropTypes from 'prop-types';
import {useRef} from 'react'; 

const color = {
    'google-blue 100': `#4285F4`,
    'white 100': `rgb(255,255,255)`,
  }

/* const blueDot = {
    fillColor: color['google-blue 100'],
    fillOpacity: 1,
    scale: 8,
    strokeColor: color['white 100'],
    strokeWeight: 2,
    path: window.google.maps.SymbolPath.CIRCLE
  }; */

    // Se le da acceso al objeto mapObject (mapa embebido)
const LocatorButton = ({mapObject}) => {
    
    const marker = useRef(null);
    
    const getUserLocation = () => {
        if (navigator.geolocation) {
            // codigo para mostrar la ubicacion del usuario
            // la ubicacion pasa a la variable especificada en el argumento de 
            // getCurrentPosition -> (position) 
            // los datos de la ubicacion del usuario se encuentran en el objeto
            // GeolocationPosition que tiene la propiedad coords (latitude y longitude)
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = {            
                    lat: position.coords.latitude, 
                    lng: position.coords.longitude, 
                  };
                // .accuracy representa la exactitud de las coordenadas expresada en metros
                const errorRange = position.coords.accuracy; 
                
                const accuracyCircle = new window.google.maps.Circle();

                accuracyCircle.current = new window.google.maps.Circle({
                    center: userLocation,
                    fillColor: color['google-blue-dark 100'],
                    fillOpacity: 0.4,
                    radius: errorRange,
                    strokeColor: color['google-blue-light 100'],
                    strokeOpacity: 0.4,
                    strokeWeight: 1,
                    zIndex: 1,
                  });
                accuracyCircle.current.setMap(mapObject);
                // setCenter es un metodo de Google Maps JS API  
                // para agregar la ubicacion del usuario a un mapa
                mapObject.setCenter(userLocation); 
                
                 
                // .current mantiene la propiedad a travez del re-renderizado de un componente
                if (marker.current) {          
                    marker.current.setMap(null); 
                }
                marker.current = new window.google.maps.Marker({ 
                
                position: userLocation,
                title: 'You are here!'
                });
            
                marker.current.setMap(mapObject); 
                        
            });
        } else {
                // code for legacy browsers
        }
    };
  return (
    <button
      type="button"
      onClick={getUserLocation}
    >
      {/* Insert the button label image */}
    </button>
  );
};
LocatorButton.propTypes = {
  mapObject: PropTypes.object,
};
export default LocatorButton;