import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from "@ionic/react";
import { useLocation } from "react-router-dom";

const Detail: React.FC = () => {

  const location: any = useLocation();
  if (location.state?.email) {
    window.localStorage.setItem('detail-state', JSON.stringify(location.state));
  } else {
    location.state = JSON.parse(window.localStorage.getItem('detail-state') ?? '');
  }

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>{location.state?.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
  
            <p>{location.state?.name}</p>
            <p>{location.state?.email}</p>
         
        </IonContent>
      </IonPage>
  );
};
  
  export default Detail;
  