import React from "react";
import PortfolioCard from "./PortfolioCard"
import projects from "../../projects.json"


class Portfolio extends React.Component {
  state = {
    projects: projects
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header"><h1>A few of the (awesome) things I've worked on</h1></div>
          <div className="card-body">
            <div className="row">
                {/* Cards for projects */}
                {this.state.projects.map(projects =>{
          return(
            
              <div className="col-12 col-md-4">
            <PortfolioCard key={projects.id}
            title={projects.title} description={projects.description} link={projects.link}
            />
            </div>
            
          )
        })}
</div>

                {/* END CARD */}
              
            <div className="row text-center">
              <div className="col-12">
                <h1 className="portfolioTag">MORE TO COME SOON</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// function Portfolio() {
//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card-header"><h1>A few of the (awesome) things I've worked on</h1></div>
//         <div className="card-body">
//           <div className="row">
//             <div className="col-12 col-md-4">
//             {/* Cards for projects */}
//                 <PortfolioCard key={projects.id} title={projects.title} />


//               {/* END CARD */}
//             </div>
//           </div>
//           <div className="row text-center">
//           <div className="col-12">
//           <h1 className="portfolioTag">MORE TO COME SOON</h1>
//           </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

export default Portfolio