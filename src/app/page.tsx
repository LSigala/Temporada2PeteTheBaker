'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  async function cakes(e: any){
    e.preventDefault();

    const data = {
      RecipeInfo: (e.target.recipeInfo.value)
    }

    const ingredientsData:any = [];
    const values:any = [];
    const recipe = data.RecipeInfo.slice(1).slice(0,-1).split("},")
    const obtainIngredients = recipe[1].slice(2).slice(0,-1).split(", ")
    
    for(const item of obtainIngredients){
      ingredientsData.push(item.split(":")[0])
    }

    for(const recipeData of recipe[0].split(", ")){
      if(!ingredientsData.includes(recipeData.split(":")[0])){
        values.push(0);
        break;
      }
      
      for(const ingredientsValues of obtainIngredients){
        if (recipeData.split(":")[0] == ingredientsValues.split(":")[0]) {
            const newValue = Number(ingredientsValues.split(":")[1]) / Number(recipeData.split(":")[1])
            values.push(newValue.toString().split(".")[0]);
          }
      }
    }

    alert(Math.min(values[0]))
}

  return (
      <form onSubmit={cakes} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="d-flex justify-content-center form-group">
                <div className="form-group col-6 px-md-4 mb-3">
                    <label>Enter Recipe Information</label>
                    <input type="text" className="form-control" id="recipeInfo" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">Send Recipe</button>
        </div>
    </form>
  );
}
