import React,{useState,useEffect,useContext} from 'react'
import Header from '../Components/Header'
import './Profile.scss';
import Done from '../Images/done.png';
import Delete from '../Images/delete.png';
import {createListContext} from '../auth/DailyContext';
import {MoodEffectContext} from '../auth/MoodEffect';

interface ListUser {
  id: number | string;
  list: string;
  marked: boolean;
}


const Profile = () => {

  const [dailyTasks,setDailyTasks]=useState<ListUser[] | any>();
  const [dailyList,setDailyList]=useState<string>('');

  const currentList= useContext(createListContext);

  const listSubmitHandler = async (event: any) => {
    event.preventDefault();
    try {
      if(dailyList === ''){
        return;
      }
      currentList?.createListHandler({
        id: Math.random(),
        list: dailyList,
        marked: false,
      })
      setDailyList('')
    } catch (error) {
      console.log(error)
    }
  }

  const listDeleteHandler=(id: number | string)=>{
    currentList?.deleteListHandler(id)
  }

  useEffect(()=>{
    setDailyTasks(currentList?.currentList)
  },[currentList?.currentList])

  const toggleBrandButton = async (id: number |string) => {
   
    try {
      currentList?.markedHandler(id)
    } catch (error) {
      console.log(error)
    }
  };

  const useMoodEffect=useContext(MoodEffectContext)


  return (
   <section className={`profile-page ${useMoodEffect?.effect==='dark'? 'dark': 'light'}`}>
    <Header />
     <section className='todos-container'>

      <h1>add your daily tasks</h1>

      <form className='todos-form' onSubmit={listSubmitHandler}>
        <div className='todos-input-box'>
          <input type="text" placeholder='my task' onChange={(e:any)=>setDailyList(e.target.value)} value={dailyList}/>
        </div>
        <button>add</button>
      </form>

        <ul className="nav-list">
          {
            dailyTasks?.map((e:ListUser,i:number)=>(
              <li key={i} className={`${e.marked ? 'marked' : ''}`}><p>{e.list}</p><span><img src={Done} alt="Done" onClick={() => toggleBrandButton(e.id)} /> <img src={Delete} alt="Delete" onClick={()=>listDeleteHandler(e.id)} /></span></li>
            ))
          }
        </ul>

     </section>
   </section>
  )
}

export default Profile
