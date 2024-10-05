import React, { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Home = () => {

    let searchref = useRef();
    // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
    const [dataRecipe, setdataRecipe] = useState([]);
    const [item, setItem] = useState("pizza");

   async function getData(){
        let res = await fetch(`https://api.edamam.com/search?q=${item}&app_id=f726a1b7&app_key=cbdd1f59795efc439b0c72298575f73b`)

        let data = await res.json();

        console.log(data.hits)
        setdataRecipe(data.hits)

    }
   
    useEffect(()=>{
        getData()
    },[item])

    const handleClick = (ans)=>{
      // console.log(item[i])
      console.log(ans.recipe)
    }

    const handleSearch =(e)=>{

      let value=searchref.current.value
      setItem(value)
    }

  return (
    <div className='pt-10 bg-gray-800'>
      <form action=""  className='w-[50%] m-auto flex justify-center gap-5'>
          <input  ref ={searchref} type="text" className='p-3 w-[250px]' placeholder='Search items here....' name="" id="" />
          <button onClick={handleSearch} type='button' className='bg-green-300 w-[120px] rounded-lg'>search</button>
      </form>
      <div  className='grid grid-cols-12 gap-2 p-8 mt-12 '>
      {/* <h3>home page</h3> */}

      {
        dataRecipe.map((ele,i)=>{
            return  <Card className=' lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 p-2 border border-gray-500 cursor-pointer rounded-md' >
            <CardMedia
              sx={{ height: 140 }}
              image={ele.recipe.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {ele.recipe.label}
              </Typography>
              {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <Link state={ele.recipe} to={'/viewrecipe'} size="small" className='bg-blue-300 w-[85px] rounded-sm'>View recipe</Link>
              <button onClick={()=>handleClick(ele)} id='view'></button>
            </CardActions>
          </Card>
        })
      }
    </div>
    </div>
  )
}

export default Home