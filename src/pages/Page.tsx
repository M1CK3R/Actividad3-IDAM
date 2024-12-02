import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { useState } from 'react';

const Page: React.FC = () => {

  const [quetzales, setQuetzales] = useState<number>(0); // Estado para la cantidad en Quetzales
  const [dolares, setDolares] = useState<number>(0); // Estado para el resultado en dólares

  const convertir = () => {
    const tasaCambio = 8; // Tasa de cambio: 8 Q por 1 USD
    setDolares(quetzales / tasaCambio);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisApp 23003931</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Conversor de Divisas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Cantidad en Quetzales (Q)</IonLabel>
              <IonInput
                type="number"
                value={quetzales}
                placeholder="Ingresa la cantidad"
                onIonChange={(e) => setQuetzales(parseFloat(e.detail.value!) || 0)}
              ></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Equivalente en Dólares ($):</IonLabel>
              <IonText color="primary">{dolares.toFixed(2)}</IonText>
            </IonItem>
            <IonButton expand="block" onClick={convertir}>
              Convertir
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;
