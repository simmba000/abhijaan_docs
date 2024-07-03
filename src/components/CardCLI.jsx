import "./CardCLI.css";
import CopyIcon from "/copy.png";

    export default function CardCLI(props) {
    // return (
    //     <div class="card">
    //         <div class="wrap">
    //             <div class="terminal">
    //             <hgroup class="head">
    //                 <p class="title">
    //                     Terminal
    //                 </p>
    //                 <button class="copy_toggle" tabindex="-1" type="button">
    //                     <svg
    //                         width="16px"
    //                         height="16px"
    //                         aria-hidden="true"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         viewBox="0 0 24 24"
    //                         stroke-linejoin="round"
    //                         stroke-linecap="round"
    //                         stroke-width="2"
    //                         stroke="currentColor"
    //                         fill="none"
    //                     >
    //                         <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
    //                         <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
    //                     </svg>
    //                 </button>
    //             </hgroup>

    //             <div class="body">
    //                 <pre class="pre">          <code>-&nbsp;</code>
    //                 <code>$ fuel&nbsp;</code>
    //                 <code class="cmd" data-cmd="create-react-app@latest"></code>
    //                 </pre>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // );

    const copyText = (command) => {
        
        console.log(command)
         // Copy the text inside the text field
        navigator.clipboard.writeText(command);
    }

    return (
        <aside class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 text-red-500">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* <p class="text-sm">bash</p> */}
                <button type="button" class="flex space-x-1 cursor-pointer" onClick={()=>copyText(props.command)}>
                    <img src={CopyIcon} alt="" width={18}/>
                </button>
            </div>
            <div class="mt-4">
                <p class="text-green-400">$ {props.command}</p>
                <p class="text-white">{props.output}</p>
            </div>
        </aside>

    );
}