import './Help.css';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonContent, IonList, IonItem, IonLabel, IonFooter } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";

const Help: React.FC<{
    onDismiss: () => void;
  }> = ({ onDismiss }) => (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => onDismiss()} size="large">
                <IonIcon slot="start" icon={closeCircleOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle>Help</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
  
            This is help content
         
        </IonContent>
        <IonFooter>
            <IonToolbar>
                <IonButton expand="block" onClick={() => onDismiss()}>Close</IonButton>
            </IonToolbar>
        </IonFooter>
      </IonPage>
    );
  
  export default Help;
  