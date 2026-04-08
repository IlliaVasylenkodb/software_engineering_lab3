import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // Розгін
    { duration: '20s', target: 10 }, // Стабільність
    { duration: '10s', target: 0 },  // Завершення
  ],
};

export default function () {
  http.get('http://localhost:8080/');
  sleep(1);
}
