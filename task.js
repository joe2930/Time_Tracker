const task1=document.getElementById('task')
const des=document.getElementById('des')
const sw=document.getElementById('s')
const h=document.getElementById('h')
const m=document.getElementById('m')
const ent=document.getElementById('entries')
const taskTableBody = document.getElementById('taskTableBody');



let intervalId
const btn=document.getElementById('timer-control')
btn.addEventListener('click',function()
{
    if(btn.textContent=='Start')
    {
        btn.style.setProperty( 'background-color','red')
        btn.textContent='Stop'
        let sec=0,min=0,hour=0
        intervalId=setInterval(function()
        {
            sec=sec+1
            if(sec>60) 
            {
                
                min=min+1
                sec=0
            }
             
            if(min>60)
            {
                hour=hour+1
                min=0
                sec=0
            }
            s.textContent = sec.toString().padStart(2, '0')
            m.textContent= min.toString().padStart(2, '0')
            h.textContent=hour.toString().padStart(2,'0')
        },37);
    }

    
    else 
    {
        btn.style.setProperty( 'background-color','rgb(101, 134, 101)')
        btn.textContent='Start'

        const newRow = document.createElement('tr');
        clearInterval(intervalId);

        const taskCell = document.createElement('td');
        taskCell.textContent = task1.value;
        newRow.appendChild(taskCell);

        const desCell = document.createElement('td');
        desCell.textContent = des.value;
        newRow.appendChild(desCell);

        const durationCell = document.createElement('td');
        durationCell.textContent = `${h.textContent}:${m.textContent}:${s.textContent}`;
        newRow.appendChild(durationCell);

        taskTableBody.appendChild(newRow);
        task1.value=''
        des.value=''
        s.textContent = '00';
         m.textContent = '00';
        h.textContent = '00';

    }
})

