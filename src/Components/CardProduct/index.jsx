import BtnVerMais from './BtnVerMais';
import styles from './CardProduct.module.css'

function CardProduct({ id, image, title, price, category, description }) {


    function truncateString(str, num) {
        if (typeof str === 'object' && str !== null) {

            str = str.title

        }
        return typeof str === 'string' ?
            (str.length <= num ? str : str.slice(0, num) + "...") :
            '';
    }
    return (
        <div className={styles.card__padrao}>
            <div>
                <img src={image} alt={`imagem anuncio ${title}`} className="h-32 w-28 mx-auto" />
                <h2 className="text-center text-lg font-bold">{truncateString({ title }, 40)}</h2>
                <p><span>Valor:</span>R$ {price}</p>
                <p className='font-light'>{category}</p>
            </div>
            <BtnVerMais className="self-end" />


        </div>
    )
}

export default CardProduct