        // hjelpevariable for både view og controller
        var contentDiv = document.getElementById('content');
    

        // model
        let numbers = [7, 3, 1, 5, 8];
        let selectedBar = null;
        let disabledButton = true; 
        let barValueWarning = null;
        

        // view
        show();
        function show() {
            let onOffButton = disabledButton == true ? 'disabled' : '' 
            let svgInnerHtml = '';
            for (let i = 0; i < numbers.length; i++) {
                svgInnerHtml += createBar(numbers[i], i + 1);
            }
            contentDiv.innerHTML = `
                <svg id="chart" width="500" viewBox="0 0 60 60">
                    ${svgInnerHtml}
                </svg>
                
                <br/>
                Valgt stolpe: <i id="chosenBarText">${selectedBar}</i>
                <br />

                Verdi: <input id="value" type="number" min="1" max="10"/>

                <button id="addBarButton" onclick="addBar()">Legg til stolpe</button>
                
                <button id="editBarButton" onclick="editBar()" 
                ${onOffButton}>Endre valgt stolpe</button><br />
                
                <button id="removeBarButton" onclick="removeBar()"
                 ${onOffButton}>Fjerne valgt stolpe</button>
                 
                <br/>

                <div id="warningDiv">${barValueWarning}</div>
                `; 
        }

        function createBar(number, numberOfBars) {
            const width = 8;
            const spacing = 2;
            let x = (numberOfBars - 1) * (width + spacing);
            let height = number * 10;
            let y = 60 - height;
            let border = 0;
            let color = calcColor(1, 10, numberOfBars);
            if (selectedBar != 'Ingen' && numberOfBars == selectedBar) { 
                border = 1;
            }
            return      `<rect onclick="barChooser(${numberOfBars})" 
                        width="${width}" 
                        height="${height}"
                        x="${x}" 
                        y="${y}" 
                        fill="${color}"
                        stroke-width="${border}"
                        stroke="black">
                        </rect>`;
        }
    

        function calcColor(min, max, val) {
            var minHue = 240, maxHue = 0;
            var curPercent = (val - min) / (max - min);
            var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
            return colString;
            show();
        }
    

        // controller
        function barChooser(numberOfBars) {
            
                if (selectedBar == numberOfBars) {
                    disabledButton = true;
                    selectedBar = 'Ingen'
                } else {
                    selectedBar = numberOfBars;
                    disabledButton = false;
                }
                show();
        }


        function addBar()   {
            
            let inputValue = document.getElementById("value");
            
                if (inputValue.value < 1 || inputValue.value > 10)    {
                    barValueWarning = "Value must be between 1 and 10";
                }   else {
                numbers.push(parseInt(inputValue.value));}
                show(); 
        }


        function editBar()  {
             
            let inputValue = document.getElementById("value");

                if (inputValue.value == 0 || inputValue.value > 10) {
                    barValueWarning = "Value must be between 1 and 10"
                }   else {numbers[parseInt(selectedBar) - 1] = parseInt (inputValue.value);}
                show();
        }


        function removeBar()    {
                
                numbers.splice(parseInt(selectedBar) - 1, 1)
                show();                     
        }