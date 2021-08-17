import css from './AlbumPage.module.css';

const AlbumPage = (props) => {
    let Images = props.albumArray.map( u => <img className={css.albumImage} src={u.url} alt={'cat_' + u.id}></img>);

    return (
        <div>
            <div className={css.albumNameBlock}><p className={css.albumName}>{props.albumName}</p></div>
            <div className={css.album}>
                {Images}
            </div>
            
        </div>
    );
}

export default AlbumPage;