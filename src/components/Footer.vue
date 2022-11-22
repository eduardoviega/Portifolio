<template>
    <div class="footer">
        <div class="text">
            <p>Copyright © 2022 by Eduardo Viega All Rights Reserved.</p>
		</div>
        
		<div class="top">
            <a href="#home"><i class='bx bx-up-arrow-alt' ></i></a>
		</div>
    </div>    
    
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
	padding: 1vh 5vw; 
	display: flex;
	align-items: center;
	justify-content: space-between; 
	gap: 2rem; 
	background: #232526; 
	background: linear-gradient(to left, #414345, #232526);
}
.text p{
	margin: 0;
	color: #fff;
	font-size: small;
}
a {
    text-decoration: none;
}
i {
	padding: 8px;
	border-radius: 8px;
	font-size: 20px;
	color: #fff;
	background-color: #3dafd2;
}
i:hover {
	background-color: #cf41ae;
}
</style>