import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import  {SearchBar,VideoDetail,VideoList}   from './Components';








class App extends React.Component{

state={
  video:[],
  selectedVideo:null,
}



 handleSubmit = async(searchTerm)=>{
   const response = await youtube.get('search',
   {


    params:{
      part: 'snippet',
      maxResults:5,
      key:'AIzaSyAVje458knWEEt1DrgMazq8e3AfdIo_jf8',   
      q: searchTerm,

  }
 }
   
   
   
   );
  this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
     
 }


 render(){
   
        return(
          <Grid justify="center" container spacing={10}>
            <Grid  item xs={12}>
              < Grid justify="center"container spacing={10}>
                 
                  <Grid  item md={6} sm={6}>
                     <SearchBar  onFormSubmit={this.handleSubmit}/>
                  </Grid>
                  <Grid item xs={8}>
                  <VideoDetail video={this.state.selectedVideo}/>
                  </Grid>
                  <Grid item xs={4}>
                       <VideoList />
                  </Grid>


              </Grid>


          </Grid>


            </Grid>
        )
    }
}

export default App;