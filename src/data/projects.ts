import type { Project } from "./types";

// Traffic Prediction Images
import trafficImg0 from "@/assets/projects/traffic-prediction/NY-Traffic-Prediction.JPG";
import trafficImg1 from "@/assets/projects/traffic-prediction/Img1.png";
import trafficImg2 from "@/assets/projects/traffic-prediction/Img2.png";
import trafficImg3 from "@/assets/projects/traffic-prediction/Img3.png";
import trafficImg4 from "@/assets/projects/traffic-prediction/Img4.png";
import trafficImg5 from "@/assets/projects/traffic-prediction/Img5.png";

// Location Advisor Images
import locationImg1 from "@/assets/projects/location-advisor/Img1.PNG";
import locationImg2 from "@/assets/projects/location-advisor/Img2.PNG";
import locationImg3 from "@/assets/projects/location-advisor/Img3.PNG";
import locationImg4 from "@/assets/projects/location-advisor/Img4.PNG";

// Classic Fun Games Images
import gamesCFG from "@/assets/projects/classic-fun-games/CFG.PNG";
import gamesImg1 from "@/assets/projects/classic-fun-games/Img1.PNG";
import gamesImg2 from "@/assets/projects/classic-fun-games/Img2.PNG";
import gamesImg3 from "@/assets/projects/classic-fun-games/Img3.PNG";
import gamesImg4 from "@/assets/projects/classic-fun-games/Img4.PNG";

export const projects: Project[] = [
	{
		id: "project-1",
		title: {
			en: "New York Real-time Traffic Prediction",
			es: "Predicción en tiempo real del tráfico en Nueva York",
		},
		description: {
			en: "Generation of real-time predictions about the traffic status in New York and visualization of them on a web page.",
			es: "Generación de predicciones en tiempo real sobre el estado del tráfico en Nueva York y visualización de ellas en una página web.",
		},
		longDescription: {
			en: `
                        The project consists of two modules. The first one generates predictive models based on historical traffic, air quality, and weather data in Manhattan, and uses real-time data to make predictions. The model continuously compares the predictions with the actual values to allow for automatic retraining of the models. Predictions are made for 26 streets in the Manhattan district.

The second module is a web page that visualizes the data in graphs by hour or street, showing the comparison between predictions and actual values. The information is automatically updated as new real-time data is generated.
                        `,
			es: `
                        El proyecto consta de dos módulos. El primero genera modelos predictivos a partir de datos históricos de tráfico, calidad del aire y clima en Manhattan, y utiliza datos en tiempo real para realizar predicciones. El modelo compara continuamente las predicciones con los valores reales para permitir el reentrenamiento automático de los modelos. Las predicciones se realizan para 26 calles del distrito de Manhattan.

El segundo módulo es una página web que visualiza los datos en gráficos por hora o calle, mostrando la comparación entre predicciones y valores reales. La información se actualiza automáticamente conforme se generan nuevos datos en tiempo real.
                        `,
		},
		images: [trafficImg0, trafficImg1, trafficImg2, trafficImg3, trafficImg4, trafficImg5],
		technologies: ["Python", "Pandas", "Tensorflow", "React"],
		liveUrl: "",
		githubUrl: "https://github.com/JuanmaRuizF/NY-Traffic-Prediction",
	},
	{
		id: "project-2",
		title: {
			en: "Location Advisor",
			es: "Asesor de Ubicación",
		},
		description: {
			en: "Show the best places to visit in the current area or any other location of interest.",
			es: "Mostrar los mejores lugares para visitar en la zona actual o en cualquier otra ubicación de interés.",
		},
		longDescription: {
			en: "It is possible to define the number of results, the search radius, the order of the items, and the desired location. Users can add or remove places from favorites and view them on a dedicated page with all their details. Data is obtained from various endpoints of the Foursquare API.",
			es: "Es posible definir el número de resultados, el radio de búsqueda, el orden de los elementos y la ubicación deseada. Los usuarios pueden añadir o eliminar lugares de favoritos y consultarlos en una página dedicada con todos sus detalles. Los datos se obtienen de varios endpoints de la API de Foursquare.",
		},
		images: [locationImg1, locationImg2, locationImg3, locationImg4],
		technologies: ["React", "Leaflet"],
		liveUrl: "https://juanmaruizf.github.io/location-advisor/#/",
		githubUrl: "https://github.com/JuanmaRuizF/location-advisor",
	},
	{
		id: "project-3",
		title: {
			en: "Classic fun games",
			es: "Juegos clásicos divertidos",
		},
		description: {
			en: "Web page with the implementation of several classic games",
			es: "Página web con la implementación de varios juegos clásicos",
		},
		longDescription: {
			en: "Game implementations: Sudoku, Connect 4, and a memory game. Some games support difficulty selection and additional features such as automatic solving in Sudoku or validation of user inputs.",
			es: "Implementaciones de juegos: Sudoku, Conecta 4 y un juego de memoria. Algunos juegos soportan selección de dificultad y características adicionales como resolución automática en Sudoku o validación de entradas del usuario.",
		},
		images: [gamesCFG, gamesImg1, gamesImg2, gamesImg3, gamesImg4],
		technologies: ["React"],
		liveUrl: "https://juanmaruizf.github.io/classic-fun-games/",
		githubUrl: "https://github.com/JuanmaRuizF/classic-fun-games",
	},
];
