# Todo-App-Using-Piral

**Created very basic todo app:**
Created 2 micro front-ends:
1- Add New Task
2- Todo List
Created a base application (application shell) to integrate both microfront-ends and to exchange data between them.

## Step-by-Step Guide: ##

### Step 1: Create a repo on github or gitlab and then clone it to your local laptop ###

**In my case:** I created a repo named “todo-app-using-piral”, cloned it to my laptop.
![Screenshot from 2024-01-24 13-34-49](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/983c96fd-13d8-4459-b9e1-86f08c3f631a)

### Step 2: Download piral cli ###

**Use this command:** npm i piral-cli -g

### Step 3: Create Application Shell ###

**Use this command:** piral new --target my-app
**In my case:** I created base application named “todo-app”

![Screenshot from 2024-01-24 13-36-28](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/2f66a58d-7d58-4952-b046-1320d03c192b)


### Step 4: Run Application Shell ###
**Use this command:** npx piral debug

### Step 5: Create Microfrontends (Pilets) ###

**Use this Command:** pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target my-pilet

**In my case:**
I created 2 pilets:
1- Add new task: pilet new ./todo-app/dist/emulator/todo-app-1.0.0.tgz --target add-new-task

![Screenshot from 2024-01-24 13-37-56](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/8a70fbf6-937a-4a72-82a2-78dbb2b65bbc)


2-Todo List: pilet new ./todo-app/dist/emulator/todo-app-1.0.0.tgz --target todo-list

![Screenshot from 2024-01-24 13-38-38](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/736f52fd-d90f-4f2f-a8e2-dbb70910d057)


### Step 6: Run Pilets ###
**Use this command:** npx pilet debug

### Step 7: Signup with piral cloud ###
**Use this link:** https://portal.piral.cloud/

![Screenshot from 2024-01-24 13-39-16](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/045a7b17-0127-47e3-aedf-9b25827d6e10)


### Step 8: Create feed ###
![Screenshot from 2024-01-24 13-24-31](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/e10cdcbc-adc9-49a5-9f72-e6a594598ad9)


### Step 9: Generate API Key ###
![Screenshot from 2024-01-24 13-41-48](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/e8eb227c-c6ca-4ee0-9a50-24cb07fb11d6)


### Step 10: Publish 2 pilets on feed ###

**Use this command:** npx pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/my-tutorial-feed --api-key <your-api-key>

**In my case:** I published my both pilets

![Screenshot from 2024-01-24 13-46-11](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/7f0ef111-15d6-41e5-a12e-70e57ba44c81)

## My “todo-list” pilet:##

![Screenshot from 2024-01-24 13-56-32](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/fc718dd7-2458-4da6-83b9-cbc9882eaba5)

## My “add-new-task” pilet:##

![Screenshot from 2024-01-24 14-04-51](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/3b57af57-a6e0-4481-9ddc-81b226ef7e2f)

## My base application shell where i integrated both pilets:##
![Screenshot from 2024-01-24 14-08-34](https://github.com/AroobaFatimah/todo-app-using-piral/assets/91956217/e08b09a8-a8d4-4df8-aef7-df395b052235)

Both pilets are integrated, share data between pilets using setData and getData events
