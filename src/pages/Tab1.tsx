import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';
import Help from './Help';
import './Tab1.css';
import { useHistory } from "react-router-dom";

const peopleList = [
  { key: 1, name: "Todd", email: "todd@simplybest.com"},
  { key: 2, name: "Brett", email: "brett@simplybest.com"},
  { key: 3, name: "Bob", email: "bob@simplybest.com"},
];

const Tab1: React.FC = () => {

  const handleDismiss = () => {
    dismiss();
  };
  const [present, dismiss] = useIonModal(Help, {
    onDismiss: handleDismiss
  });
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="end">
            <IonButton onClick={() => present()} size="large">
              <IonIcon slot="start" icon={helpCircleOutline} />
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
            <IonItem key={person.key} button onClick={(e) => {
              e.preventDefault();
              history.push('/tab1/detail', person);
            }}>
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
