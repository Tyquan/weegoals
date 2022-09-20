class CreateGoal extends HTMLElement 
{
    constructor()
    {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const form = document.createElement('div');
        form.innerHTML = this.render();
        shadow.appendChild(form);
    }

    render()
    {
        return `Create Goal Component`;
    }
};

customElements.define('create-goal', CreateGoal);