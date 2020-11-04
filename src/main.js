import './css/style.scss';
import searchForm from './form';
import cssTesting from './config';
import testData from './data/data.json';
import showResults from './display';

const content = document.getElementById('content');
content.appendChild(searchForm);
const searchResults = document.createElement('section');
searchResults.id = 'search-results';
content.appendChild(searchResults);

if (cssTesting) {
  showResults(testData);
}
