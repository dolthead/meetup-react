import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonContent, IonList, IonItem, IonLabel } from "@ionic/react";
import { closeCircle } from "ionicons/icons";

const close = () => {

}

const Help: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={close}>
                <IonIcon slot="start" icon={closeCircle} />
              </IonButton>
            </IonButtons>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
  
            This is help content
         
        </IonContent>
      </IonPage>
    );
  };
  
  export default Help;
  