import * as firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore';
import config from '../configs/config';

const settings = {timestampsInSnapshots: true};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;