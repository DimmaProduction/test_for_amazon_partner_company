import css from './App.module.css'
import { connect } from 'react-redux'
import { getNewCat } from './redux/catReducer'
import { getNewDog } from './redux/dogReducer'
import { getNewFox } from './redux/foxReducer'
import {getCatImages, getCatUrl, getDogImages, getDogUrl, getFoxImages, getFoxUrl, getIsFetching_Cat, getIsFetching_Dog, getIsFetching_Fox} from './redux/selectors'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumPage from './components/AlbumPage/AlbumPage'

function App (props) {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every 5 second!')
      props.getNewCat()
    }, 5000)

    const interval2 = setInterval(() => {
      console.log('This will run every 10 second!')
      props.getNewDog()
    }, 10000)

    const interval3 = setInterval(() => {
      console.log('This will run every 15 second!')
      props.getNewFox()
    }, 15000)

    return () => {
      clearInterval(interval)
      clearInterval(interval2)
      clearInterval(interval3)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className={css.App}>
        <Header />
        
        <Switch>
          <Route path='/main' render={ ()=> <Main   catUrl={props.catUrl}
                                                      dogUrl={props.dogUrl}
                                                      foxUrl={props.foxUrl}
                                                      isFetching_cat={props.isFetching_cat}
                                                      isFetching_dog={props.isFetching_dog}
                                                      isFetching_fox={props.isFetching_fox}
                                              /> } />
          <Route path='/cat' render={ () => <AlbumPage  albumName={"ALBUM of CATs"}
                                                      albumArray={props.catImages} />} />
          <Route path='/dog' render={ () => <AlbumPage  albumName={"ALBUM of DOGs"}
                                                      albumArray={props.dogImages} />} />
          <Route path='/fox' render={ () => <AlbumPage  albumName={"ALBUM of FOXs"}
                                                      albumArray={props.foxImages} />} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    catUrl: getCatUrl(state),
    dogUrl: getDogUrl(state),
    foxUrl: getFoxUrl(state),
    catImages: getCatImages(state),
    dogImages: getDogImages(state),
    foxImages: getFoxImages(state),
    isFetching_cat: getIsFetching_Cat(state),
    isFetching_dog: getIsFetching_Dog(state),
    isFetching_fox: getIsFetching_Fox(state)
  }
}

export default connect(mapStateToProps, { getNewCat, getNewDog, getNewFox })( App );
