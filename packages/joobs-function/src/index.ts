import axios from 'axios';
import { add } from '@joobs/joobs-data';

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
  console.log('add:', add(1, 2));
  console.log('res:', res.data);
  console.log('res:', res.data);
  console.log('res:', res.data);
  console.log('res:', res.data);
  console.log('res:', res.data);
});
