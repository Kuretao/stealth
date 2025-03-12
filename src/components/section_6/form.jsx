import "./form.css";



export const FormBody = () => {
    return(
        <div className="form-slide">
            <form>
                <input type="name" placeholder="massage"/>
                <input type="email" placeholder="massage"/>
                <input type="text" placeholder="massage"/>
                <textarea name="massage" id="massage" placeholder="massage"></textarea>
                <button>SEND</button>
            </form>

            <span>Copyright © 2025 Artyfact Ltd. All rights reserved</span>
            <a href="#">Privacy policy</a>
        </div>
    )
}


export const FormSection = () => {
    return(
        <section className="wrapper wrapper__form">
            <FormBody/>
        </section>
    )
}