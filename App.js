import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
       <Image source={{ uri: 'https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/373645677_2041703769518917_9155783986519122533_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHrVrZ_2v5cOcQXxO2_doCS1a8cksTsAZ7VrxySxOwBnlDF-r34xoj1MKHTDjFujNMZZqCi1HK2DeNZL_cJQhxD&_nc_ohc=oe5AbhP9bHAAX89ZBYe&_nc_ht=scontent.fmnl9-2.fna&_nc_e2o=c&oh=00_AfDV-oNAO0-yl__hCfYg9zI2csN1wymWchosASbtMFhBTQ&oe=64FA0ABE'}} style ={styles.Picture} />
     </View>
  ) 
};
const BioData = () =>{
  return(
    <View> 
<Text style ={styles.name}> Loraine Mae Balbiran Tamayo </Text>
<Text style={styles.course}> BS Information Technology 3B</Text> 
</View>
  )
}

const SubjectLabel = () =>{
  return(
    <View>
      <Text style={styles.label}> My Subject </Text>
    </View>
  )
}
const SubjectOfferings = ()=>{
  return(
     
       <View style = {styles.subjectContainer}>
  <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 2</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Web Development/Web Enterprise</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Information and Assurance 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.profile}>
      <Picture />
      <BioData />
      </View>

      
      <View style ={styles.label}>
      <SubjectLabel/> 
      </View>

      
      <SubjectOfferings/>
      
       
      </View>

      <View>
        <Text style={styles.seeMore}>Click here to see more</Text>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'left',
  },
 
  profile: {
    backgroundColor: '#24469C',
    alignItems: 'left',
    width: 350,
    height: 260,
    marginBottom:'40px',
    marginTop:'40px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  Picture: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  
  name:{
    color: '#fff',
    fontSize: '20px',
    marginLeft: '20px' 
  },
  course: {
    color: '#fff',
    marginLeft: '20px',
  },

 label:{
  backgroundColor: '#ffOOff',
  color: '#ffOOff',
  marginLeft: 10,
  fontWeight: 'bold'
 },

 subjectOfferings:{
 flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
with: 150,
backgroundColor: '#DCDCDC',
borderTopRightRadius: 10,
borderTopLeftRadius: 10,
borderBottomRightRadius: 10,
borderBottomLeftRadius: 10,
marginBottom:'8px',
marginTop:'8px',
},

 subjectCode:{
  fontSize: '22px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'20px',
   
},

subjectDescription:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectUnits:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'gray',
 },

seeMore:{
  color:'#24469C',
  marginBottom:'40px',
  marginTop:'10px',
  marginLeft:'185px',
  fontSize: '15px',  
}
});
