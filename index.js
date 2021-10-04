Vue.createApp({
    data() {
        return {
            input: "",
            inputs: []
        }
    },
    methods: {
        StringManipulation(input) 
        {
            this.inputs[0]=input,
            this.inputs[1]=input.toLowerCase(),
            this.inputs[2]=input.toUpperCase()
        }
    }
}).mount("#UserInput")