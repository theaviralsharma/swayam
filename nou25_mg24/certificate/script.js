const VALID_TOKEN =
"nWqSk5h7UZ3UGato0UE8spc1Vc69JudJkWOk78pVuPQuU3SbdRpkMUsj3UJCUyxD";

const PDF="../pdf/255620112350_nou25_mg24.pdf";

const params=new URLSearchParams(location.search);

const token=params.get("q");

const viewer=document.getElementById("pdfViewer");

if(token===VALID_TOKEN){

    viewer.src=PDF;

}else{

    document.body.innerHTML=`
    
    <h1 style="
        text-align:center;
        margin-top:100px;
        font-family:Arial;
    ">
    
    Certificate Not Found
    
    </h1>
    
    `;

}