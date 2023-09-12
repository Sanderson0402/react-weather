import styles from './css.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Input({ cityName, handleCityChange, handleFetchWeather }) {
  return (
    <div class={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        value={cityName}
        onChange={handleCityChange}
        placeholder="Digite o nome da cidade"
      />
        <button className={styles.button} onClick={handleFetchWeather}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
    </div>
  );
}

export default Input;


