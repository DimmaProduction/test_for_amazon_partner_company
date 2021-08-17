import loading_image from '../../img/loading.gif';
import css from './Main.module.css';

const Main = (props) => {
    debugger;
    return (
        <div className={css.main}>

            <div className={css.blockOfMain}>
                <p className={css.blockName}> CAT </p>
                {
                    props.isFetching_cat
                        ? <img className={css.img} src={loading_image} alt='Loading..'></img>
                        : <img className={css.img} src={props.catUrl} alt='cat_photo'></img>
                }
            </div>

            <div className={css.blockOfMain}>
                <p className={css.blockName}> DOG </p>
                {
                    props.isFetching_dog
                        ? <img className={css.img} src={loading_image} alt='Loading..'></img>
                        : <img className={css.img} src={props.dogUrl} alt='dog_photo'></img>
                }
            </div>

            <div className={css.blockOfMain}>
                <p className={css.blockName}> FOX </p>
                {
                    props.isFetching_fox
                        ? <img className={css.img} src={loading_image} alt='Loading..'></img>
                        : <img className={css.img} src={props.foxUrl} alt='fox_photo'></img>
                }
            </div>

        </div>
    );
}

export default Main;