import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { helpCircle } from 'ionicons/icons';
import './Tab1.css';

const peopleList = [
  { key: 1, name: "Todd", email: "todd@simplybest.com"},
  { key: 2, name: "Brett", email: "brett@simplybest.com"},
  { key: 3, name: "Bob", email: "bob@simplybest.com"},
];

// const openHelp = () => {
//   const [present] = useIonModal(Help, {});
//   present()
// }

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="start" icon={helpCircle} />
            </IonButton>
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
            {peopleList.map(person => (
            <IonItem>
              <IonLabel>{person.name}</IonLabel>
              <p>{person.email}</p>
            </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
