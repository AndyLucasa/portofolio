 import React from "react";


class ReadMore  extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.readClick = this.readClick.bind(this);
    }
        readClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }
        render (){
            return (
                <div>
                    {this.state.isToggleOn ? (
                        <div>
                            <button onClick={this.readClick} class="flex justify-start my-8 px-7 py-2 text-md text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2">Read more</button>
                        </div>
                        
                    ) : (
                        <div>
                            <p data-aos="fade-up" data-aos-duration="2600"className="text-left text-base font-light font-rubik tracking-tighter">
                                Fueled by my passion in Graphics Design, Artificial Intelligence applications and the development of various applications I chose to follow the computer science branch.
                                As I already said, I have a passion for application developments whether it is mobile, web or desktop and I have been using Google's Flutter technology (a cross-platform software development kit from a single code base) since my first years at university (3 years of experience).
                                Now, I'm looking to learn about web technologies proposed by the Js community .
                            </p>
                        </div>
                    )}

                    
                </div>
            );
    }
}
 
export default ReadMore;