<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Làm Bài Thi</title>
	<link rel="stylesheet" href="res/css/normalize.css">
	<link rel="stylesheet" href="res/css/style.min.css">
	<link rel="stylesheet" href="res/css/font-awesome.css">
	<link rel="stylesheet" href="res/css/materialize.min.css">
	<script src="res/js/jquery.js"></script>
	<script src="res/js/materialize.min.js"></script>
    <script src='res/libs/MathJax/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
	<script src="res/js/student_functions.js"></script>
</head>

<body class="body-login overflow scrollbar">
	<div class="navbar-fixed">
		<nav>
			<div class="nav-wrapper nav-green">
				<div class="left pad-left-20">
					<span class="title">Làm Bài Thi 834677</span>
				</div>
				<span class="brand-logo right cursor" id="timer"></span>
			</div>
		</nav>
		<div id="status" class="status"></div>
	</div>
	<div class="test-content">
		<div class="testing-left">
			<a href="#quest-1" class="menu-link">Câu 1 <span class="tick" id="tick-1"></span></a><a href="#quest-2" class="menu-link">Câu 2 <span class="tick" id="tick-2"></span></a><a href="#quest-3" class="menu-link">Câu 3 <span class="tick" id="tick-3"></span></a><a href="#quest-4" class="menu-link">Câu 4 <span class="tick" id="tick-4"></span></a><a href="#quest-5" class="menu-link">Câu 5 <span class="tick" id="tick-5"></span></a><a href="#quest-6" class="menu-link">Câu 6 <span class="tick" id="tick-6"></span></a><a href="#quest-7" class="menu-link">Câu 7 <span class="tick" id="tick-7"></span></a><a href="#quest-8" class="menu-link">Câu 8 <span class="tick" id="tick-8"></span></a><a href="#quest-9" class="menu-link">Câu 9 <span class="tick" id="tick-9"></span></a><a href="#quest-10" class="menu-link">Câu 10 <span class="tick" id="tick-10"></span></a><a href="#quest-11" class="menu-link">Câu 11 <span class="tick" id="tick-11"></span></a><a href="#quest-12" class="menu-link">Câu 12 <span class="tick" id="tick-12"></span></a><a href="#quest-13" class="menu-link">Câu 13 <span class="tick" id="tick-13"></span></a><a href="#quest-14" class="menu-link">Câu 14 <span class="tick" id="tick-14"></span></a><a href="#quest-15" class="menu-link">Câu 15 <span class="tick" id="tick-15"></span></a><a href="#quest-16" class="menu-link">Câu 16 <span class="tick" id="tick-16"></span></a><a href="#quest-17" class="menu-link">Câu 17 <span class="tick" id="tick-17"></span></a><a href="#quest-18" class="menu-link">Câu 18 <span class="tick" id="tick-18"></span></a><a href="#quest-19" class="menu-link">Câu 19 <span class="tick" id="tick-19"></span></a><a href="#quest-20" class="menu-link">Câu 20 <span class="tick" id="tick-20"></span></a><a href="#quest-21" class="menu-link">Câu 21 <span class="tick" id="tick-21"></span></a><a href="#quest-22" class="menu-link">Câu 22 <span class="tick" id="tick-22"></span></a><a href="#quest-23" class="menu-link">Câu 23 <span class="tick" id="tick-23"></span></a><a href="#quest-24" class="menu-link">Câu 24 <span class="tick" id="tick-24"></span></a><a href="#quest-25" class="menu-link">Câu 25 <span class="tick" id="tick-25"></span></a><a href="#quest-26" class="menu-link">Câu 26 <span class="tick" id="tick-26"></span></a><a href="#quest-27" class="menu-link">Câu 27 <span class="tick" id="tick-27"></span></a><a href="#quest-28" class="menu-link">Câu 28 <span class="tick" id="tick-28"></span></a><a href="#quest-29" class="menu-link">Câu 29 <span class="tick" id="tick-29"></span></a><a href="#quest-30" class="menu-link">Câu 30 <span class="tick" id="tick-30"></span></a><a href="#quest-31" class="menu-link">Câu 31 <span class="tick" id="tick-31"></span></a><a href="#quest-32" class="menu-link">Câu 32 <span class="tick" id="tick-32"></span></a><a href="#quest-33" class="menu-link">Câu 33 <span class="tick" id="tick-33"></span></a><a href="#quest-34" class="menu-link">Câu 34 <span class="tick" id="tick-34"></span></a><a href="#quest-35" class="menu-link">Câu 35 <span class="tick" id="tick-35"></span></a><a href="#quest-36" class="menu-link">Câu 36 <span class="tick" id="tick-36"></span></a><a href="#quest-37" class="menu-link">Câu 37 <span class="tick" id="tick-37"></span></a><a href="#quest-38" class="menu-link">Câu 38 <span class="tick" id="tick-38"></span></a><a href="#quest-39" class="menu-link">Câu 39 <span class="tick" id="tick-39"></span></a><a href="#quest-40" class="menu-link">Câu 40 <span class="tick" id="tick-40"></span></a><a href="#quest-41" class="menu-link">Câu 41 <span class="tick" id="tick-41"></span></a><a href="#quest-42" class="menu-link">Câu 42 <span class="tick" id="tick-42"></span></a><a href="#quest-43" class="menu-link">Câu 43 <span class="tick" id="tick-43"></span></a><a href="#quest-44" class="menu-link">Câu 44 <span class="tick" id="tick-44"></span></a><a href="#quest-45" class="menu-link">Câu 45 <span class="tick" id="tick-45"></span></a><a href="#quest-46" class="menu-link">Câu 46 <span class="tick" id="tick-46"></span></a><a href="#quest-47" class="menu-link">Câu 47 <span class="tick" id="tick-47"></span></a><a href="#quest-48" class="menu-link">Câu 48 <span class="tick" id="tick-48"></span></a><a href="#quest-49" class="menu-link">Câu 49 <span class="tick" id="tick-49"></span></a><a href="#quest-50" class="menu-link">Câu 50 <span class="tick" id="tick-50"></span></a><a href="#quest-51" class="menu-link">Câu 51 <span class="tick" id="tick-51"></span></a><a href="#quest-52" class="menu-link">Câu 52 <span class="tick" id="tick-52"></span></a><a href="#quest-53" class="menu-link">Câu 53 <span class="tick" id="tick-53"></span></a><a href="#quest-54" class="menu-link">Câu 54 <span class="tick" id="tick-54"></span></a><a href="#quest-55" class="menu-link">Câu 55 <span class="tick" id="tick-55"></span></a><a href="#quest-56" class="menu-link">Câu 56 <span class="tick" id="tick-56"></span></a><a href="#quest-57" class="menu-link">Câu 57 <span class="tick" id="tick-57"></span></a><a href="#quest-58" class="menu-link">Câu 58 <span class="tick" id="tick-58"></span></a><a href="#quest-59" class="menu-link">Câu 59 <span class="tick" id="tick-59"></span></a><a href="#quest-60" class="menu-link">Câu 60 <span class="tick" id="tick-60"></span></a><a href="#quest-61" class="menu-link">Câu 61 <span class="tick" id="tick-61"></span></a><a href="#quest-62" class="menu-link">Câu 62 <span class="tick" id="tick-62"></span></a><a href="#quest-63" class="menu-link">Câu 63 <span class="tick" id="tick-63"></span></a><a href="#quest-64" class="menu-link">Câu 64 <span class="tick" id="tick-64"></span></a><a href="#quest-65" class="menu-link">Câu 65 <span class="tick" id="tick-65"></span></a><a href="#quest-66" class="menu-link">Câu 66 <span class="tick" id="tick-66"></span></a><a href="#quest-67" class="menu-link">Câu 67 <span class="tick" id="tick-67"></span></a><a href="#quest-68" class="menu-link">Câu 68 <span class="tick" id="tick-68"></span></a><a href="#quest-69" class="menu-link">Câu 69 <span class="tick" id="tick-69"></span></a><a href="#quest-70" class="menu-link">Câu 70 <span class="tick" id="tick-70"></span></a><a href="#quest-71" class="menu-link">Câu 71 <span class="tick" id="tick-71"></span></a><a href="#quest-72" class="menu-link">Câu 72 <span class="tick" id="tick-72"></span></a><a href="#quest-73" class="menu-link">Câu 73 <span class="tick" id="tick-73"></span></a><a href="#quest-74" class="menu-link">Câu 74 <span class="tick" id="tick-74"></span></a><a href="#quest-75" class="menu-link">Câu 75 <span class="tick" id="tick-75"></span></a><a href="#quest-76" class="menu-link">Câu 76 <span class="tick" id="tick-76"></span></a><a href="#quest-77" class="menu-link">Câu 77 <span class="tick" id="tick-77"></span></a><a href="#quest-78" class="menu-link">Câu 78 <span class="tick" id="tick-78"></span></a><a href="#quest-79" class="menu-link">Câu 79 <span class="tick" id="tick-79"></span></a><a href="#quest-80" class="menu-link">Câu 80 <span class="tick" id="tick-80"></span></a><a href="#quest-81" class="menu-link">Câu 81 <span class="tick" id="tick-81"></span></a><a href="#quest-82" class="menu-link">Câu 82 <span class="tick" id="tick-82"></span></a><a href="#quest-83" class="menu-link">Câu 83 <span class="tick" id="tick-83"></span></a><a href="#quest-84" class="menu-link">Câu 84 <span class="tick" id="tick-84"></span></a><a href="#quest-85" class="menu-link">Câu 85 <span class="tick" id="tick-85"></span></a><a href="#quest-86" class="menu-link">Câu 86 <span class="tick" id="tick-86"></span></a><a href="#quest-87" class="menu-link">Câu 87 <span class="tick" id="tick-87"></span></a><a href="#quest-88" class="menu-link">Câu 88 <span class="tick" id="tick-88"></span></a><a href="#quest-89" class="menu-link">Câu 89 <span class="tick" id="tick-89"></span></a><a href="#quest-90" class="menu-link">Câu 90 <span class="tick" id="tick-90"></span></a><a href="#quest-91" class="menu-link">Câu 91 <span class="tick" id="tick-91"></span></a><a href="#quest-92" class="menu-link">Câu 92 <span class="tick" id="tick-92"></span></a><a href="#quest-93" class="menu-link">Câu 93 <span class="tick" id="tick-93"></span></a><a href="#quest-94" class="menu-link">Câu 94 <span class="tick" id="tick-94"></span></a><a href="#quest-95" class="menu-link">Câu 95 <span class="tick" id="tick-95"></span></a><a href="#quest-96" class="menu-link">Câu 96 <span class="tick" id="tick-96"></span></a><a href="#quest-97" class="menu-link">Câu 97 <span class="tick" id="tick-97"></span></a><a href="#quest-98" class="menu-link">Câu 98 <span class="tick" id="tick-98"></span></a><a href="#quest-99" class="menu-link">Câu 99 <span class="tick" id="tick-99"></span></a><a href="#quest-100" class="menu-link">Câu 100 <span class="tick" id="tick-100"></span></a><a href="#quest-101" class="menu-link">Câu 101 <span class="tick" id="tick-101"></span></a><a href="#quest-102" class="menu-link">Câu 102 <span class="tick" id="tick-102"></span></a><a href="#quest-103" class="menu-link">Câu 103 <span class="tick" id="tick-103"></span></a><a href="#quest-104" class="menu-link">Câu 104 <span class="tick" id="tick-104"></span></a><a href="#quest-105" class="menu-link">Câu 105 <span class="tick" id="tick-105"></span></a><a href="#quest-106" class="menu-link">Câu 106 <span class="tick" id="tick-106"></span></a><a href="#quest-107" class="menu-link">Câu 107 <span class="tick" id="tick-107"></span></a><a href="#quest-108" class="menu-link">Câu 108 <span class="tick" id="tick-108"></span></a><a href="#quest-109" class="menu-link">Câu 109 <span class="tick" id="tick-109"></span></a><a href="#quest-110" class="menu-link">Câu 110 <span class="tick" id="tick-110"></span></a><a href="#quest-111" class="menu-link">Câu 111 <span class="tick" id="tick-111"></span></a><a href="#quest-112" class="menu-link">Câu 112 <span class="tick" id="tick-112"></span></a><a href="#quest-113" class="menu-link">Câu 113 <span class="tick" id="tick-113"></span></a><a href="#quest-114" class="menu-link">Câu 114 <span class="tick" id="tick-114"></span></a><a href="#quest-115" class="menu-link">Câu 115 <span class="tick" id="tick-115"></span></a><a href="#quest-116" class="menu-link">Câu 116 <span class="tick" id="tick-116"></span></a><a href="#quest-117" class="menu-link">Câu 117 <span class="tick" id="tick-117"></span></a><a href="#quest-118" class="menu-link">Câu 118 <span class="tick" id="tick-118"></span></a><a href="#quest-119" class="menu-link">Câu 119 <span class="tick" id="tick-119"></span></a><a href="#quest-120" class="menu-link">Câu 120 <span class="tick" id="tick-120"></span></a><a href="#quest-121" class="menu-link">Câu 121 <span class="tick" id="tick-121"></span></a><a href="#quest-122" class="menu-link">Câu 122 <span class="tick" id="tick-122"></span></a><a href="#quest-123" class="menu-link">Câu 123 <span class="tick" id="tick-123"></span></a><a href="#quest-124" class="menu-link">Câu 124 <span class="tick" id="tick-124"></span></a><a href="#quest-125" class="menu-link">Câu 125 <span class="tick" id="tick-125"></span></a><a href="#quest-126" class="menu-link">Câu 126 <span class="tick" id="tick-126"></span></a><a href="#quest-127" class="menu-link">Câu 127 <span class="tick" id="tick-127"></span></a><a href="#quest-128" class="menu-link">Câu 128 <span class="tick" id="tick-128"></span></a><a href="#quest-129" class="menu-link">Câu 129 <span class="tick" id="tick-129"></span></a><a href="#quest-130" class="menu-link">Câu 130 <span class="tick" id="tick-130"></span></a><a href="#quest-131" class="menu-link">Câu 131 <span class="tick" id="tick-131"></span></a><a href="#quest-132" class="menu-link">Câu 132 <span class="tick" id="tick-132"></span></a><a href="#quest-133" class="menu-link">Câu 133 <span class="tick" id="tick-133"></span></a><a href="#quest-134" class="menu-link">Câu 134 <span class="tick" id="tick-134"></span></a><a href="#quest-135" class="menu-link">Câu 135 <span class="tick" id="tick-135"></span></a><a href="#quest-136" class="menu-link">Câu 136 <span class="tick" id="tick-136"></span></a><a href="#quest-137" class="menu-link">Câu 137 <span class="tick" id="tick-137"></span></a><a href="#quest-138" class="menu-link">Câu 138 <span class="tick" id="tick-138"></span></a><a href="#quest-139" class="menu-link">Câu 139 <span class="tick" id="tick-139"></span></a><a href="#quest-140" class="menu-link">Câu 140 <span class="tick" id="tick-140"></span></a><a href="#quest-141" class="menu-link">Câu 141 <span class="tick" id="tick-141"></span></a><a href="#quest-142" class="menu-link">Câu 142 <span class="tick" id="tick-142"></span></a><a href="#quest-143" class="menu-link">Câu 143 <span class="tick" id="tick-143"></span></a><a href="#quest-144" class="menu-link">Câu 144 <span class="tick" id="tick-144"></span></a><a href="#quest-145" class="menu-link">Câu 145 <span class="tick" id="tick-145"></span></a><a href="#quest-146" class="menu-link">Câu 146 <span class="tick" id="tick-146"></span></a><a href="#quest-147" class="menu-link">Câu 147 <span class="tick" id="tick-147"></span></a><a href="#quest-148" class="menu-link">Câu 148 <span class="tick" id="tick-148"></span></a><a href="#quest-149" class="menu-link">Câu 149 <span class="tick" id="tick-149"></span></a><a href="#quest-150" class="menu-link">Câu 150 <span class="tick" id="tick-150"></span></a><a href="#quest-151" class="menu-link">Câu 151 <span class="tick" id="tick-151"></span></a><a href="#quest-152" class="menu-link">Câu 152 <span class="tick" id="tick-152"></span></a><a href="#quest-153" class="menu-link">Câu 153 <span class="tick" id="tick-153"></span></a><a href="#quest-154" class="menu-link">Câu 154 <span class="tick" id="tick-154"></span></a><a href="#quest-155" class="menu-link">Câu 155 <span class="tick" id="tick-155"></span></a><a href="#quest-156" class="menu-link">Câu 156 <span class="tick" id="tick-156"></span></a><a href="#quest-157" class="menu-link">Câu 157 <span class="tick" id="tick-157"></span></a><a href="#quest-158" class="menu-link">Câu 158 <span class="tick" id="tick-158"></span></a><a href="#quest-159" class="menu-link">Câu 159 <span class="tick" id="tick-159"></span></a><a href="#quest-160" class="menu-link">Câu 160 <span class="tick" id="tick-160"></span></a><a href="#quest-161" class="menu-link">Câu 161 <span class="tick" id="tick-161"></span></a><a href="#quest-162" class="menu-link">Câu 162 <span class="tick" id="tick-162"></span></a><a href="#quest-163" class="menu-link">Câu 163 <span class="tick" id="tick-163"></span></a><a href="#quest-164" class="menu-link">Câu 164 <span class="tick" id="tick-164"></span></a><a href="#quest-165" class="menu-link">Câu 165 <span class="tick" id="tick-165"></span></a><a href="#quest-166" class="menu-link">Câu 166 <span class="tick" id="tick-166"></span></a><a href="#quest-167" class="menu-link">Câu 167 <span class="tick" id="tick-167"></span></a><a href="#quest-168" class="menu-link">Câu 168 <span class="tick" id="tick-168"></span></a><a href="#quest-169" class="menu-link">Câu 169 <span class="tick" id="tick-169"></span></a><a href="#quest-170" class="menu-link">Câu 170 <span class="tick" id="tick-170"></span></a><a href="#quest-171" class="menu-link">Câu 171 <span class="tick" id="tick-171"></span></a><a href="#quest-172" class="menu-link">Câu 172 <span class="tick" id="tick-172"></span></a><a href="#quest-173" class="menu-link">Câu 173 <span class="tick" id="tick-173"></span></a><a href="#quest-174" class="menu-link">Câu 174 <span class="tick" id="tick-174"></span></a><a href="#quest-175" class="menu-link">Câu 175 <span class="tick" id="tick-175"></span></a><a href="#quest-176" class="menu-link">Câu 176 <span class="tick" id="tick-176"></span></a><a href="#quest-177" class="menu-link">Câu 177 <span class="tick" id="tick-177"></span></a><a href="#quest-178" class="menu-link">Câu 178 <span class="tick" id="tick-178"></span></a><a href="#quest-179" class="menu-link">Câu 179 <span class="tick" id="tick-179"></span></a><a href="#quest-180" class="menu-link">Câu 180 <span class="tick" id="tick-180"></span></a><a href="#quest-181" class="menu-link">Câu 181 <span class="tick" id="tick-181"></span></a><a href="#quest-182" class="menu-link">Câu 182 <span class="tick" id="tick-182"></span></a><a href="#quest-183" class="menu-link">Câu 183 <span class="tick" id="tick-183"></span></a><a href="#quest-184" class="menu-link">Câu 184 <span class="tick" id="tick-184"></span></a><a href="#quest-185" class="menu-link">Câu 185 <span class="tick" id="tick-185"></span></a><a href="#quest-186" class="menu-link">Câu 186 <span class="tick" id="tick-186"></span></a><a href="#quest-187" class="menu-link">Câu 187 <span class="tick" id="tick-187"></span></a><a href="#quest-188" class="menu-link">Câu 188 <span class="tick" id="tick-188"></span></a><a href="#quest-189" class="menu-link">Câu 189 <span class="tick" id="tick-189"></span></a><a href="#quest-190" class="menu-link">Câu 190 <span class="tick" id="tick-190"></span></a><a href="#quest-191" class="menu-link">Câu 191 <span class="tick" id="tick-191"></span></a><a href="#quest-192" class="menu-link">Câu 192 <span class="tick" id="tick-192"></span></a><a href="#quest-193" class="menu-link">Câu 193 <span class="tick" id="tick-193"></span></a><a href="#quest-194" class="menu-link">Câu 194 <span class="tick" id="tick-194"></span></a><a href="#quest-195" class="menu-link">Câu 195 <span class="tick" id="tick-195"></span></a><a href="#quest-196" class="menu-link">Câu 196 <span class="tick" id="tick-196"></span></a><a href="#quest-197" class="menu-link">Câu 197 <span class="tick" id="tick-197"></span></a><a href="#quest-198" class="menu-link">Câu 198 <span class="tick" id="tick-198"></span></a><a href="#quest-199" class="menu-link">Câu 199 <span class="tick" id="tick-199"></span></a><a href="#quest-200" class="menu-link">Câu 200 <span class="tick" id="tick-200"></span></a><a href="#quest-201" class="menu-link">Câu 201 <span class="tick" id="tick-201"></span></a><a href="#quest-202" class="menu-link">Câu 202 <span class="tick" id="tick-202"></span></a><a href="#quest-203" class="menu-link">Câu 203 <span class="tick" id="tick-203"></span></a><a href="#quest-204" class="menu-link">Câu 204 <span class="tick" id="tick-204"></span></a><a href="#quest-205" class="menu-link">Câu 205 <span class="tick" id="tick-205"></span></a><a href="#quest-206" class="menu-link">Câu 206 <span class="tick" id="tick-206"></span></a><a href="#quest-207" class="menu-link">Câu 207 <span class="tick" id="tick-207"></span></a><a href="#quest-208" class="menu-link">Câu 208 <span class="tick" id="tick-208"></span></a><a href="#quest-209" class="menu-link">Câu 209 <span class="tick" id="tick-209"></span></a><a href="#quest-210" class="menu-link">Câu 210 <span class="tick" id="tick-210"></span></a><a href="#quest-211" class="menu-link">Câu 211 <span class="tick" id="tick-211"></span></a><a href="#quest-212" class="menu-link">Câu 212 <span class="tick" id="tick-212"></span></a><a href="#quest-213" class="menu-link">Câu 213 <span class="tick" id="tick-213"></span></a><a href="#quest-214" class="menu-link">Câu 214 <span class="tick" id="tick-214"></span></a><a href="#quest-215" class="menu-link">Câu 215 <span class="tick" id="tick-215"></span></a><a href="#quest-216" class="menu-link">Câu 216 <span class="tick" id="tick-216"></span></a><a href="#quest-217" class="menu-link">Câu 217 <span class="tick" id="tick-217"></span></a><a href="#quest-218" class="menu-link">Câu 218 <span class="tick" id="tick-218"></span></a><a href="#quest-219" class="menu-link">Câu 219 <span class="tick" id="tick-219"></span></a><a href="#quest-220" class="menu-link">Câu 220 <span class="tick" id="tick-220"></span></a><a href="#quest-221" class="menu-link">Câu 221 <span class="tick" id="tick-221"></span></a><a href="#quest-222" class="menu-link">Câu 222 <span class="tick" id="tick-222"></span></a><a href="#quest-223" class="menu-link">Câu 223 <span class="tick" id="tick-223"></span></a><a href="#quest-224" class="menu-link">Câu 224 <span class="tick" id="tick-224"></span></a><a href="#quest-225" class="menu-link">Câu 225 <span class="tick" id="tick-225"></span></a><a href="#quest-226" class="menu-link">Câu 226 <span class="tick" id="tick-226"></span></a><a href="#quest-227" class="menu-link">Câu 227 <span class="tick" id="tick-227"></span></a><a href="#quest-228" class="menu-link">Câu 228 <span class="tick" id="tick-228"></span></a><a href="#quest-229" class="menu-link">Câu 229 <span class="tick" id="tick-229"></span></a><a href="#quest-230" class="menu-link">Câu 230 <span class="tick" id="tick-230"></span></a><a href="#quest-231" class="menu-link">Câu 231 <span class="tick" id="tick-231"></span></a><a href="#quest-232" class="menu-link">Câu 232 <span class="tick" id="tick-232"></span></a><a href="#quest-233" class="menu-link">Câu 233 <span class="tick" id="tick-233"></span></a><a href="#quest-234" class="menu-link">Câu 234 <span class="tick" id="tick-234"></span></a><a href="#quest-235" class="menu-link">Câu 235 <span class="tick" id="tick-235"></span></a><a href="#quest-236" class="menu-link">Câu 236 <span class="tick" id="tick-236"></span></a><a href="#quest-237" class="menu-link">Câu 237 <span class="tick" id="tick-237"></span></a><a href="#quest-238" class="menu-link">Câu 238 <span class="tick" id="tick-238"></span></a><a href="#quest-239" class="menu-link">Câu 239 <span class="tick" id="tick-239"></span></a><a href="#quest-240" class="menu-link">Câu 240 <span class="tick" id="tick-240"></span></a><a href="#quest-241" class="menu-link">Câu 241 <span class="tick" id="tick-241"></span></a><a href="#quest-242" class="menu-link">Câu 242 <span class="tick" id="tick-242"></span></a><a href="#quest-243" class="menu-link">Câu 243 <span class="tick" id="tick-243"></span></a><a href="#quest-244" class="menu-link">Câu 244 <span class="tick" id="tick-244"></span></a><a href="#quest-245" class="menu-link">Câu 245 <span class="tick" id="tick-245"></span></a><a href="#quest-246" class="menu-link">Câu 246 <span class="tick" id="tick-246"></span></a><a href="#quest-247" class="menu-link">Câu 247 <span class="tick" id="tick-247"></span></a><a href="#quest-248" class="menu-link">Câu 248 <span class="tick" id="tick-248"></span></a><a href="#quest-249" class="menu-link">Câu 249 <span class="tick" id="tick-249"></span></a><a href="#quest-250" class="menu-link">Câu 250 <span class="tick" id="tick-250"></span></a><a href="#quest-251" class="menu-link">Câu 251 <span class="tick" id="tick-251"></span></a><a href="#quest-252" class="menu-link">Câu 252 <span class="tick" id="tick-252"></span></a><a href="#quest-253" class="menu-link">Câu 253 <span class="tick" id="tick-253"></span></a><a href="#quest-254" class="menu-link">Câu 254 <span class="tick" id="tick-254"></span></a><a href="#quest-255" class="menu-link">Câu 255 <span class="tick" id="tick-255"></span></a><a href="#quest-256" class="menu-link">Câu 256 <span class="tick" id="tick-256"></span></a><a href="#quest-257" class="menu-link">Câu 257 <span class="tick" id="tick-257"></span></a><a href="#quest-258" class="menu-link">Câu 258 <span class="tick" id="tick-258"></span></a><a href="#quest-259" class="menu-link">Câu 259 <span class="tick" id="tick-259"></span></a><a href="#quest-260" class="menu-link">Câu 260 <span class="tick" id="tick-260"></span></a><a href="#quest-261" class="menu-link">Câu 261 <span class="tick" id="tick-261"></span></a><a href="#quest-262" class="menu-link">Câu 262 <span class="tick" id="tick-262"></span></a><a href="#quest-263" class="menu-link">Câu 263 <span class="tick" id="tick-263"></span></a><a href="#quest-264" class="menu-link">Câu 264 <span class="tick" id="tick-264"></span></a><a href="#quest-265" class="menu-link">Câu 265 <span class="tick" id="tick-265"></span></a><a href="#quest-266" class="menu-link">Câu 266 <span class="tick" id="tick-266"></span></a><a href="#quest-267" class="menu-link">Câu 267 <span class="tick" id="tick-267"></span></a><a href="#quest-268" class="menu-link">Câu 268 <span class="tick" id="tick-268"></span></a><a href="#quest-269" class="menu-link">Câu 269 <span class="tick" id="tick-269"></span></a><a href="#quest-270" class="menu-link">Câu 270 <span class="tick" id="tick-270"></span></a><a href="#quest-271" class="menu-link">Câu 271 <span class="tick" id="tick-271"></span></a><a href="#quest-272" class="menu-link">Câu 272 <span class="tick" id="tick-272"></span></a><a href="#quest-273" class="menu-link">Câu 273 <span class="tick" id="tick-273"></span></a><a href="#quest-274" class="menu-link">Câu 274 <span class="tick" id="tick-274"></span></a><a href="#quest-275" class="menu-link">Câu 275 <span class="tick" id="tick-275"></span></a><a href="#quest-276" class="menu-link">Câu 276 <span class="tick" id="tick-276"></span></a><a href="#quest-277" class="menu-link">Câu 277 <span class="tick" id="tick-277"></span></a><a href="#quest-278" class="menu-link">Câu 278 <span class="tick" id="tick-278"></span></a><a href="#quest-279" class="menu-link">Câu 279 <span class="tick" id="tick-279"></span></a><a href="#quest-280" class="menu-link">Câu 280 <span class="tick" id="tick-280"></span></a><a href="#quest-281" class="menu-link">Câu 281 <span class="tick" id="tick-281"></span></a><a href="#quest-282" class="menu-link">Câu 282 <span class="tick" id="tick-282"></span></a><a href="#quest-283" class="menu-link">Câu 283 <span class="tick" id="tick-283"></span></a><a href="#quest-284" class="menu-link">Câu 284 <span class="tick" id="tick-284"></span></a><a href="#quest-285" class="menu-link">Câu 285 <span class="tick" id="tick-285"></span></a><a href="#quest-286" class="menu-link">Câu 286 <span class="tick" id="tick-286"></span></a><a href="#quest-287" class="menu-link">Câu 287 <span class="tick" id="tick-287"></span></a><a href="#quest-288" class="menu-link">Câu 288 <span class="tick" id="tick-288"></span></a><a href="#quest-289" class="menu-link">Câu 289 <span class="tick" id="tick-289"></span></a><a href="#quest-290" class="menu-link">Câu 290 <span class="tick" id="tick-290"></span></a><a href="#quest-291" class="menu-link">Câu 291 <span class="tick" id="tick-291"></span></a><a href="#quest-292" class="menu-link">Câu 292 <span class="tick" id="tick-292"></span></a><a href="#quest-293" class="menu-link">Câu 293 <span class="tick" id="tick-293"></span></a><a href="#quest-294" class="menu-link">Câu 294 <span class="tick" id="tick-294"></span></a><a href="#quest-295" class="menu-link">Câu 295 <span class="tick" id="tick-295"></span></a><a href="#quest-296" class="menu-link">Câu 296 <span class="tick" id="tick-296"></span></a><a href="#quest-297" class="menu-link">Câu 297 <span class="tick" id="tick-297"></span></a><a href="#quest-298" class="menu-link">Câu 298 <span class="tick" id="tick-298"></span></a><a href="#quest-299" class="menu-link">Câu 299 <span class="tick" id="tick-299"></span></a><a href="#quest-300" class="menu-link">Câu 300 <span class="tick" id="tick-300"></span></a><a href="#quest-301" class="menu-link">Câu 301 <span class="tick" id="tick-301"></span></a><a href="#quest-302" class="menu-link">Câu 302 <span class="tick" id="tick-302"></span></a><a href="#quest-303" class="menu-link">Câu 303 <span class="tick" id="tick-303"></span></a><a href="#quest-304" class="menu-link">Câu 304 <span class="tick" id="tick-304"></span></a><a href="#quest-305" class="menu-link">Câu 305 <span class="tick" id="tick-305"></span></a><a href="#quest-306" class="menu-link">Câu 306 <span class="tick" id="tick-306"></span></a><a href="#quest-307" class="menu-link">Câu 307 <span class="tick" id="tick-307"></span></a><a href="#quest-308" class="menu-link">Câu 308 <span class="tick" id="tick-308"></span></a><a href="#quest-309" class="menu-link">Câu 309 <span class="tick" id="tick-309"></span></a><a href="#quest-310" class="menu-link">Câu 310 <span class="tick" id="tick-310"></span></a><a href="#quest-311" class="menu-link">Câu 311 <span class="tick" id="tick-311"></span></a><a href="#quest-312" class="menu-link">Câu 312 <span class="tick" id="tick-312"></span></a><a href="#quest-313" class="menu-link">Câu 313 <span class="tick" id="tick-313"></span></a><a href="#quest-314" class="menu-link">Câu 314 <span class="tick" id="tick-314"></span></a><a href="#quest-315" class="menu-link">Câu 315 <span class="tick" id="tick-315"></span></a><a href="#quest-316" class="menu-link">Câu 316 <span class="tick" id="tick-316"></span></a><a href="#quest-317" class="menu-link">Câu 317 <span class="tick" id="tick-317"></span></a><a href="#quest-318" class="menu-link">Câu 318 <span class="tick" id="tick-318"></span></a><a href="#quest-319" class="menu-link">Câu 319 <span class="tick" id="tick-319"></span></a><a href="#quest-320" class="menu-link">Câu 320 <span class="tick" id="tick-320"></span></a><a href="#quest-321" class="menu-link">Câu 321 <span class="tick" id="tick-321"></span></a><a href="#quest-322" class="menu-link">Câu 322 <span class="tick" id="tick-322"></span></a><a href="#quest-323" class="menu-link">Câu 323 <span class="tick" id="tick-323"></span></a><a href="#quest-324" class="menu-link">Câu 324 <span class="tick" id="tick-324"></span></a><a href="#quest-325" class="menu-link">Câu 325 <span class="tick" id="tick-325"></span></a><a href="#quest-326" class="menu-link">Câu 326 <span class="tick" id="tick-326"></span></a><a href="#quest-327" class="menu-link">Câu 327 <span class="tick" id="tick-327"></span></a><a href="#quest-328" class="menu-link">Câu 328 <span class="tick" id="tick-328"></span></a><a href="#quest-329" class="menu-link">Câu 329 <span class="tick" id="tick-329"></span></a><a href="#quest-330" class="menu-link">Câu 330 <span class="tick" id="tick-330"></span></a><a href="#quest-331" class="menu-link">Câu 331 <span class="tick" id="tick-331"></span></a><a href="#quest-332" class="menu-link">Câu 332 <span class="tick" id="tick-332"></span></a><a href="#quest-333" class="menu-link">Câu 333 <span class="tick" id="tick-333"></span></a><a href="#quest-334" class="menu-link">Câu 334 <span class="tick" id="tick-334"></span></a><a href="#quest-335" class="menu-link">Câu 335 <span class="tick" id="tick-335"></span></a><a href="#quest-336" class="menu-link">Câu 336 <span class="tick" id="tick-336"></span></a><a href="#quest-337" class="menu-link">Câu 337 <span class="tick" id="tick-337"></span></a><a href="#quest-338" class="menu-link">Câu 338 <span class="tick" id="tick-338"></span></a><a href="#quest-339" class="menu-link">Câu 339 <span class="tick" id="tick-339"></span></a><a href="#quest-340" class="menu-link">Câu 340 <span class="tick" id="tick-340"></span></a><a href="#quest-341" class="menu-link">Câu 341 <span class="tick" id="tick-341"></span></a><a href="#quest-342" class="menu-link">Câu 342 <span class="tick" id="tick-342"></span></a><a href="#quest-343" class="menu-link">Câu 343 <span class="tick" id="tick-343"></span></a><a href="#quest-344" class="menu-link">Câu 344 <span class="tick" id="tick-344"></span></a><a href="#quest-345" class="menu-link">Câu 345 <span class="tick" id="tick-345"></span></a><a href="#quest-346" class="menu-link">Câu 346 <span class="tick" id="tick-346"></span></a><a href="#quest-347" class="menu-link">Câu 347 <span class="tick" id="tick-347"></span></a><a href="#quest-348" class="menu-link">Câu 348 <span class="tick" id="tick-348"></span></a><a href="#quest-349" class="menu-link">Câu 349 <span class="tick" id="tick-349"></span></a><a href="#quest-350" class="menu-link">Câu 350 <span class="tick" id="tick-350"></span></a>		</div>
		<div class="testing-right">
							<div id="quest-1" class="item-quest">
					<div class="quest-title">Câu 1 :</div>
					<div class="quest-content">
						<span>Trước khi TRANSACTION được thực hiện thành công, hành động được tự động thực hiện nếu máy bị tắt nguồn?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="842" data-idquest="842" type="radio" data-stt="1" value="a" />    								<span>COMMIT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="842" data-idquest="842" type="radio" data-stt="1" value="b" />    								<span>VIEW</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="842" data-idquest="842" type="radio" data-stt="1" value="c" />    								<span>FLASHBACK</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="842" data-idquest="842" type="radio" data-stt="1" value="d" />    								<span>ROLLBACK</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-2" class="item-quest">
					<div class="quest-title">Câu 2 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, C→D, D→B}. Phân rã BCNF (lossless) đúng là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="884" data-idquest="884" type="radio" data-stt="2" value="a" />    								<span>{R1(A,B,C), R2(C,D), R3(D,E)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="884" data-idquest="884" type="radio" data-stt="2" value="b" />    								<span>{R1(A,B,D), R2(B,C), R3(C,E)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="884" data-idquest="884" type="radio" data-stt="2" value="c" />    								<span>{R1(A,B,C,D), R2(B,E)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="884" data-idquest="884" type="radio" data-stt="2" value="d" />    								<span>{R1(A,B,C), R2(B,C,D), R3(A,B,E)}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-3" class="item-quest">
					<div class="quest-title">Câu 3 :</div>
					<div class="quest-content">
						<span>Mệnh đề GROUP BY ... HAVING</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="302" data-idquest="302" type="radio" data-stt="3" value="a" />    								<span>Áp dụng các phép toán gộp nhóm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="302" data-idquest="302" type="radio" data-stt="3" value="b" />    								<span>Phân hoạch các bộ của một quan hệ thành các nhóm riêng biệt và áp dụng các phép toán gộp cho các nhóm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="302" data-idquest="302" type="radio" data-stt="3" value="c" />    								<span>Phân hoạch các bộ của một quan hệ thành các nhóm riêng biệt</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="302" data-idquest="302" type="radio" data-stt="3" value="d" />    								<span>Tách các quan hệ thành các quan hệ con, không tổn thất thông tin</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-4" class="item-quest">
					<div class="quest-title">Câu 4 :</div>
					<div class="quest-content">
						<span>Giá trị các thành phần của khoá quy định:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="790" data-idquest="790" type="radio" data-stt="4" value="a" />    								<span>Không thể nhận giá trị null hay các giá trị không xác định.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="790" data-idquest="790" type="radio" data-stt="4" value="b" />    								<span>Có thể nhận giá trị null</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="790" data-idquest="790" type="radio" data-stt="4" value="c" />    								<span>Không thể nhận giá trị null nhưng có thể nhận các giá trị không xác định</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="790" data-idquest="790" type="radio" data-stt="4" value="d" />    								<span>Có thể nhận giá trị null hay các giá trị không xác định.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-5" class="item-quest">
					<div class="quest-title">Câu 5 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. (Giả sử Title duy nhất) Lấy (SID, Name) của sinh viên GPA ≥ 3.0 và đã đăng ký môn Title='Database'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1031" data-idquest="1031" type="radio" data-stt="5" value="a" />    								<span>﻿σGPA≥3.0∧Title=′Database′(πSID,Name(STUDENT⋈ENROLL⋈COURSE))σ_{GPA≥3.0 ∧ Title='Database'}(π_{SID,Name}(STUDENT ⋈ ENROLL ⋈ COURSE))σGPA≥3.0∧Title=′Database′​(πSID,Name​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1031" data-idquest="1031" type="radio" data-stt="5" value="b" />    								<span>﻿πSID,Name(σGPA≥3.0∧Title=′Database′(STUDENT⋈ENROLL⋈COURSE))π_{SID,Name}(σ_{GPA≥3.0 ∧ Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))πSID,Name​(σGPA≥3.0∧Title=′Database′​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1031" data-idquest="1031" type="radio" data-stt="5" value="c" />    								<span>﻿πSID,Name(σTitle=′Database′(STUDENT⋈ENROLL))π_{SID,Name}(σ_{Title='Database'}(STUDENT ⋈ ENROLL))πSID,Name​(σTitle=′Database′​(STUDENT⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1031" data-idquest="1031" type="radio" data-stt="5" value="d" />    								<span>﻿πSID,Name(σGPA≥3.0(STUDENT)⋈σTitle=′Database′(COURSE))π_{SID,Name}(σ_{GPA≥3.0}(STUDENT) ⋈ σ_{Title='Database'}(COURSE))πSID,Name​(σGPA≥3.0​(STUDENT)⋈σTitle=′Database′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-6" class="item-quest">
					<div class="quest-title">Câu 6 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R(A,B,C,D), F={A↔B, C→D}. Khóa ứng viên là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1134" data-idquest="1134" type="radio" data-stt="6" value="a" />    								<span>{C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1134" data-idquest="1134" type="radio" data-stt="6" value="b" />    								<span>{AC, BC}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1134" data-idquest="1134" type="radio" data-stt="6" value="c" />    								<span>{AB}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1134" data-idquest="1134" type="radio" data-stt="6" value="d" />    								<span>{A}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-7" class="item-quest">
					<div class="quest-title">Câu 7 :</div>
					<div class="quest-content">
						<span>Đặc điểm cần có của liên kết N-M (nhiều - nhiều) trong ERM:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="817" data-idquest="817" type="radio" data-stt="7" value="a" />    								<span>Có khóa chính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="817" data-idquest="817" type="radio" data-stt="7" value="b" />    								<span>Không có thuộc tính mô tả</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="817" data-idquest="817" type="radio" data-stt="7" value="c" />    								<span>Không có tên của liên kết</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="817" data-idquest="817" type="radio" data-stt="7" value="d" />    								<span>Có thuộc tính mô tả</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-8" class="item-quest">
					<div class="quest-title">Câu 8 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về mối liên kết giữa các thực thể trong mô hình thực thể quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="344" data-idquest="344" type="radio" data-stt="8" value="a" />    								<span>Mối quan hệ giữa các thực thể có thể là một - một, một - nhiều và nhiều - nhiều</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="344" data-idquest="344" type="radio" data-stt="8" value="b" />    								<span>Thực thể là những đối tượng dữ liệu cơ bản chứa nội dung các thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="344" data-idquest="344" type="radio" data-stt="8" value="c" />    								<span>Mối quan hệ giữa các thực thể chỉ có thể là một - một hoặc một - nhiều</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="344" data-idquest="344" type="radio" data-stt="8" value="d" />    								<span>Trong lược đồ quan hệ, cấu trúc dữ liệu nhiều - nhiều không thể chuyển về dạng một - nhiều</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-9" class="item-quest">
					<div class="quest-title">Câu 9 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: Num mã thuê bao, TB tên thuê bao, SDT số điện thoại, DC điạ chỉ. Chọn câu đúng sau đây khi in các thuê bao có cùng tên là Nguyễn Nguyệt Hương:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="809" data-idquest="809" type="radio" data-stt="9" value="a" />    								<span>SELECT COUNT( *) FROM R WHERE TB =”Nguyễn Nguyệt Hương”</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="809" data-idquest="809" type="radio" data-stt="9" value="b" />    								<span>SELECT * FROM R WHERE TB =”Nguyễn Nguyệt Hương”</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="809" data-idquest="809" type="radio" data-stt="9" value="c" />    								<span>SELECT SDT FROM R WHERE TB =”Nguyễn Nguyệt Hương”</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="809" data-idquest="809" type="radio" data-stt="9" value="d" />    								<span>SELECT TB FROM R WHERE TB =”Nguyễn Nguyệt Hương”</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-10" class="item-quest">
					<div class="quest-title">Câu 10 :</div>
					<div class="quest-content">
						<span>ERD: Product có thuộc tính đa trị Tag. Chọn ánh xạ đúng.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1166" data-idquest="1166" type="radio" data-stt="10" value="a" />    								<span>TAG(Tag PK); PRODUCT(PID PK, Tag FK)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1166" data-idquest="1166" type="radio" data-stt="10" value="b" />    								<span>PRODUCT(PID PK, Tags TEXT)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1166" data-idquest="1166" type="radio" data-stt="10" value="c" />    								<span>PRODUCT(PID PK, Tag1, Tag2, Tag3)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1166" data-idquest="1166" type="radio" data-stt="10" value="d" />    								<span>PRODUCT(PID PK, ...); PRODUCT_TAG(PID FK, Tag, PK(PID,Tag))</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-11" class="item-quest">
					<div class="quest-title">Câu 11 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="487" data-idquest="487" type="radio" data-stt="11" value="a" />    								<span>Nếu F = {A → B, C → D}, C ⊂ B khi đó A → D ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="487" data-idquest="487" type="radio" data-stt="11" value="b" />    								<span>Nếu F = {A → B, C → X, BX → Z} khi đó A → Z ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="487" data-idquest="487" type="radio" data-stt="11" value="c" />    								<span>Nếu F = {A → B, C → D}, C ⊂ B khi đó A → C ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="487" data-idquest="487" type="radio" data-stt="11" value="d" />    								<span>Nếu F = {A → B, C → X, BX → Z} khi đó AC → Z ∈ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-12" class="item-quest">
					<div class="quest-title">Câu 12 :</div>
					<div class="quest-content">
						<span>Trong mô hình phân cấp dữ liệu được biểu diễn</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="206" data-idquest="206" type="radio" data-stt="12" value="a" />    								<span>Trong mỗi một cây, một bản gốc và bản ghi phụ thuộc</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="206" data-idquest="206" type="radio" data-stt="12" value="b" />    								<span>Trong một tệp duy nhất theo cấu trúc cây</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="206" data-idquest="206" type="radio" data-stt="12" value="c" />    								<span>Trong nhiều cây</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="206" data-idquest="206" type="radio" data-stt="12" value="d" />    								<span>Trong nhiều tệp theo cấu trúc cây</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-13" class="item-quest">
					<div class="quest-title">Câu 13 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: mã thuê bao (ID), tên thuê bao (NameTB), số điện thoại (SDT), địa chỉ (DC). Chọn câu đúng sau đây khi tính tổng số lượng các thuê bao có cùng địa chỉ:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="808" data-idquest="808" type="radio" data-stt="13" value="a" />    								<span>SELECT * FROM R GROUP BY DC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="808" data-idquest="808" type="radio" data-stt="13" value="b" />    								<span>SELECT COUNT( *) FROM R GROUP BY DC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="808" data-idquest="808" type="radio" data-stt="13" value="c" />    								<span>SELECT SUM( *) FROM R GROUP BY DC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="808" data-idquest="808" type="radio" data-stt="13" value="d" />    								<span>SELECT * FROM R GROUP BY DC COUNT( *) >= 1</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-14" class="item-quest">
					<div class="quest-title">Câu 14 :</div>
					<div class="quest-content">
						<span>Cho CSDL gồm các bảng sau: KhachHang(MaKH, TenKH, ThanhPho) SanPham(MaSP, TenSP, SoLuong, DonGia) DaiLy (MaDL, TenDL, ThanhPho, HueHong) DatHang (MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien) Chọn câu lệnh SQL để giải quyết câu truy vấn sau: Liệt kê danh sách tên các khách hàng mua sản phẩm 'P02'</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="564" data-idquest="564" type="radio" data-stt="14" value="a" />    								<span>Select TenKH from KhachHang c, DatHang o where c.MaKH = o.MaKH and o.MaSP = 'P02';</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="564" data-idquest="564" type="radio" data-stt="14" value="b" />    								<span>Select TenKH from KhachHang c where DatHang.MaSP = 'P02';</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="564" data-idquest="564" type="radio" data-stt="14" value="c" />    								<span>Select TenKH from KhachHang c, DatHang o where o.MaSP = 'P02';</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="564" data-idquest="564" type="radio" data-stt="14" value="d" />    								<span>Select TenKH from SanPham where MaSP = 'P02';</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-15" class="item-quest">
					<div class="quest-title">Câu 15 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: K# mã thuê bao, TB tên thuê bao, SDT số điện thoại, DC địa chỉ. Chọn câu đúng sau đây khi in các thuê bao có cùng tên là Nguyễn Nguyệt Hương, biểu diễn bằng đại số quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="499" data-idquest="499" type="radio" data-stt="15" value="a" />    								<span>πSDT(σTB = "Nguyễn Nguyệt Hương"(R))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="499" data-idquest="499" type="radio" data-stt="15" value="b" />    								<span>πCOUNT(*)(σTB = "Nguyễn Nguyệt Hương"(R))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="499" data-idquest="499" type="radio" data-stt="15" value="c" />    								<span>πTB(σTB = "Nguyễn Nguyệt Hương"(R))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="499" data-idquest="499" type="radio" data-stt="15" value="d" />    								<span>σTB = "Nguyễn Nguyệt Hương"(R)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-16" class="item-quest">
					<div class="quest-title">Câu 16 :</div>
					<div class="quest-content">
						<span>Cho các phụ thuộc hàm sau F= (Z Q -> A N C, Z -> C), của lược đồ quan hệ B = (Z,Q,A,N,C) ta có thể suy ra:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="561" data-idquest="561" type="radio" data-stt="16" value="a" />    								<span>Không có câu nào đúng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="561" data-idquest="561" type="radio" data-stt="16" value="b" />    								<span>Q C là khóa của lược đồ quan hệ B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="561" data-idquest="561" type="radio" data-stt="16" value="c" />    								<span>Z là khóa của lược đồ quan hệ B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="561" data-idquest="561" type="radio" data-stt="16" value="d" />    								<span>Z Q là khóa của lược đồ quan hệ B</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-17" class="item-quest">
					<div class="quest-title">Câu 17 :</div>
					<div class="quest-content">
						<span>Mức ngoài là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="767" data-idquest="767" type="radio" data-stt="17" value="a" />    								<span>Nội dung thông tin của toàn bộ CSDL dưới cách nhìn của người sử dụng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="767" data-idquest="767" type="radio" data-stt="17" value="b" />    								<span>Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="767" data-idquest="767" type="radio" data-stt="17" value="c" />    								<span>Nội dung thông tin của một phần cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="767" data-idquest="767" type="radio" data-stt="17" value="d" />    								<span>Nội dung thông tin của toàn bộ CSDL</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-18" class="item-quest">
					<div class="quest-title">Câu 18 :</div>
					<div class="quest-content">
						<span>Cậu lệnh sử dụng để thay đổi thông tin trường "LastName" từ "Thomas" thành "Michel" trong bảng "Users"?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="858" data-idquest="858" type="radio" data-stt="18" value="a" />    								<span>MODIFY Users 
SET LastName = 'Thomas' 
INTO LastName = 'Michel'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="858" data-idquest="858" type="radio" data-stt="18" value="b" />    								<span>MODIFY Users 
SET LastName = 'Michel' 
WHERE LastName = 'Thomas'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="858" data-idquest="858" type="radio" data-stt="18" value="c" />    								<span>UPDATE User 
SET LastName = 'Thomas' 
INTO LastName = 'Michel'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="858" data-idquest="858" type="radio" data-stt="18" value="d" />    								<span>UPDATE Users 
SET LastName = 'Michel' 
WHERE LastName = 'Thomas'</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-19" class="item-quest">
					<div class="quest-title">Câu 19 :</div>
					<div class="quest-content">
						<span>Cho Ω = {A, B, C} và F = {A → C, A → B}</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="386" data-idquest="386" type="radio" data-stt="19" value="a" />    								<span>Không tồn tại các thuộc tính không khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="386" data-idquest="386" type="radio" data-stt="19" value="b" />    								<span>Quan hệ trên có dạng chuẩn không phải 2NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="386" data-idquest="386" type="radio" data-stt="19" value="c" />    								<span>{A, C}, {B, E} là khóa của quan hệ trên</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="386" data-idquest="386" type="radio" data-stt="19" value="d" />    								<span>Tồn tại các thuộc tính không khóa</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-20" class="item-quest">
					<div class="quest-title">Câu 20 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="356" data-idquest="356" type="radio" data-stt="20" value="a" />    								<span>A → B và A → C ⇒ B → BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="356" data-idquest="356" type="radio" data-stt="20" value="b" />    								<span>Tên thuê bao → Số điện thoại thuê bao</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="356" data-idquest="356" type="radio" data-stt="20" value="c" />    								<span>A → B và A → C ⇒ A → BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="356" data-idquest="356" type="radio" data-stt="20" value="d" />    								<span>AA → AB và AA → C suy ra A → BC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-21" class="item-quest">
					<div class="quest-title">Câu 21 :</div>
					<div class="quest-content">
						<span>Xét R(K,G,B,H,Z,C) Với tập phụ thuộc hàm F={K -> G, K -> B, B H -> Z, B H -> C, G -> Z}. Phụ thuộc hàm nào sau đây không được suy ra từ F?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="740" data-idquest="740" type="radio" data-stt="21" value="a" />    								<span>B H -> Z C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="740" data-idquest="740" type="radio" data-stt="21" value="b" />    								<span>K H -> C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="740" data-idquest="740" type="radio" data-stt="21" value="c" />    								<span>G -> B H</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="740" data-idquest="740" type="radio" data-stt="21" value="d" />    								<span>K -> Z</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-22" class="item-quest">
					<div class="quest-title">Câu 22 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn Dept='CS' mà có ít nhất một sinh viên GPA</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="892" data-idquest="892" type="radio" data-stt="22" value="a" />    								<span>﻿πCID(σDept=′CS′(COURSE))−πCID(σGPA<2.0(STUDENT⋈ENROLL))π_{CID}(σ_{Dept='CS'}(COURSE)) − π_{CID}(σ_{GPA<2.0}(STUDENT ⋈ ENROLL))πCID​(σDept=′CS′​(COURSE))−πCID​(σGPA<2.0​(STUDENT⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="892" data-idquest="892" type="radio" data-stt="22" value="b" />    								<span>﻿πCID(σGPA<2.0(STUDENT))π_{CID}(σ_{GPA<2.0}(STUDENT))πCID​(σGPA<2.0​(STUDENT))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="892" data-idquest="892" type="radio" data-stt="22" value="c" />    								<span>﻿πCID(σDept=′CS′∧GPA<2.0(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∧ GPA<2.0}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∧GPA<2.0​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="892" data-idquest="892" type="radio" data-stt="22" value="d" />    								<span>﻿πCID(σDept=′CS′∧GPA<2.0(STUDENT⋈ENROLL⋈COURSE))π_{CID}(σ_{Dept='CS' ∧ GPA<2.0}(STUDENT ⋈ ENROLL ⋈ COURSE))πCID​(σDept=′CS′∧GPA<2.0​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-23" class="item-quest">
					<div class="quest-title">Câu 23 :</div>
					<div class="quest-content">
						<span>Để sửa đổi cấu trúc của bảng ta sử dụng lệnh:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="610" data-idquest="610" type="radio" data-stt="23" value="a" />    								<span>ALTER COLUMN</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="610" data-idquest="610" type="radio" data-stt="23" value="b" />    								<span>Lựa chọn khác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="610" data-idquest="610" type="radio" data-stt="23" value="c" />    								<span>ALTER DATABASE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="610" data-idquest="610" type="radio" data-stt="23" value="d" />    								<span>ALTER TABLE</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-24" class="item-quest">
					<div class="quest-title">Câu 24 :</div>
					<div class="quest-content">
						<span>Phép chèn thêm là phép toán</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="279" data-idquest="279" type="radio" data-stt="24" value="a" />    								<span>Chèn vào CSDL các thuộc tính mới</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="279" data-idquest="279" type="radio" data-stt="24" value="b" />    								<span>Chèn vào CSDL một số thông tin tùy ý</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="279" data-idquest="279" type="radio" data-stt="24" value="c" />    								<span>Chèn vào CSDL một số thông tin về một đối tượng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="279" data-idquest="279" type="radio" data-stt="24" value="d" />    								<span>Chèn vào CSDL từ vùng đệm chứa các thông tin về một bản ghi cụ thể</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-25" class="item-quest">
					<div class="quest-title">Câu 25 :</div>
					<div class="quest-content">
						<span>Tối ưu hóa câu hỏi bằng cách</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="307" data-idquest="307" type="radio" data-stt="25" value="a" />    								<span>Thực hiện các phép chiếu và chọn, tiếp sau mới thực hiện phép kết nối</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="307" data-idquest="307" type="radio" data-stt="25" value="b" />    								<span>Thực hiện các phép toán đại số quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="307" data-idquest="307" type="radio" data-stt="25" value="c" />    								<span>Thực hiện biến đổi không làm tổn thất thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="307" data-idquest="307" type="radio" data-stt="25" value="d" />    								<span>Bỏ đi các phép kết nối hoặc tích Đề các có chi phí lớn</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-26" class="item-quest">
					<div class="quest-title">Câu 26 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R(A,B,C), F={AB→C, C→A}. Khóa là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1124" data-idquest="1124" type="radio" data-stt="26" value="a" />    								<span>AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1124" data-idquest="1124" type="radio" data-stt="26" value="b" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1124" data-idquest="1124" type="radio" data-stt="26" value="c" />    								<span>BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1124" data-idquest="1124" type="radio" data-stt="26" value="d" />    								<span>AB, BC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-27" class="item-quest">
					<div class="quest-title">Câu 27 :</div>
					<div class="quest-content">
						<span>Một công ty triển khai các Dự án lớn, mỗi dự án được chia thành nhiều Hạng mục. Mỗi hạng mục được giao cho một chi nhánh quản lý. Nhân viên có thể tham gia nhiều hạng mục của nhiều dự án. Mỗi nhân viên thuộc một chi nhánh, mối chi nhánh có nhiều nhân viên. Các hạng mục có thể sử dụng các Tài nguyên chung của công ty. Thiết kế nào sau đây là phù hợp?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="929" data-idquest="929" type="radio" data-stt="27" value="a" />    								<span>ERD có 4 tập thực thể, 2 liên kết 1–N và 1 liên kết M–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="929" data-idquest="929" type="radio" data-stt="27" value="b" />    								<span>ERD có 4 tập thực thể, 3 liên kết 1–N và 1 liên kết M–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="929" data-idquest="929" type="radio" data-stt="27" value="c" />    								<span>ERD có 5 tập thực thể, 3 liên kết 1–N và 1 liên kết M–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="929" data-idquest="929" type="radio" data-stt="27" value="d" />    								<span>ERD có 4 tập thực thể, 2 liên kết 1–N và 2 liên kết M–N</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-28" class="item-quest">
					<div class="quest-title">Câu 28 :</div>
					<div class="quest-content">
						<span>Phép toán nào trong đại số quan hệ được sử dụng để lấy một tập kết hợp gồm mọi dòng trong bảng thứ nhất với mọi dòng trong bảng thứ hai.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="707" data-idquest="707" type="radio" data-stt="28" value="a" />    								<span>Union (Phép hợp)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="707" data-idquest="707" type="radio" data-stt="28" value="b" />    								<span>Intersection (Phép giao)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="707" data-idquest="707" type="radio" data-stt="28" value="c" />    								<span>Difference (Phép trừ)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="707" data-idquest="707" type="radio" data-stt="28" value="d" />    								<span>Product (Phép tích Descartes)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-29" class="item-quest">
					<div class="quest-title">Câu 29 :</div>
					<div class="quest-content">
						<span>Hệ quản trị CSDL - HQTCSDL (DataBase Management System - DBMS) là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="174" data-idquest="174" type="radio" data-stt="29" value="a" />    								<span>Hệ điều hành</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="174" data-idquest="174" type="radio" data-stt="29" value="b" />    								<span>Các phần mềm ứng dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="174" data-idquest="174" type="radio" data-stt="29" value="c" />    								<span>Phần mềm điều khiển các chiến lược truy nhập CSDL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="174" data-idquest="174" type="radio" data-stt="29" value="d" />    								<span>Các phần mềm hệ thống</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-30" class="item-quest">
					<div class="quest-title">Câu 30 :</div>
					<div class="quest-content">
						<span>Xét lược đồ quan hệ R(A,B,C,D) với tập phụ hàm F={A->BCD}. Gỉa sử tập khóa K={A}. R sẽ đạt thấp nhất là dạng chuẩn nào?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="733" data-idquest="733" type="radio" data-stt="30" value="a" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="733" data-idquest="733" type="radio" data-stt="30" value="b" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="733" data-idquest="733" type="radio" data-stt="30" value="c" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="733" data-idquest="733" type="radio" data-stt="30" value="d" />    								<span>Dạng chuẩn Boyce-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-31" class="item-quest">
					<div class="quest-title">Câu 31 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E,F), F = {AB→C, AC→D, D→E, E→F}. Khóa ứng viên (khoá dự bị) của R là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="985" data-idquest="985" type="radio" data-stt="31" value="a" />    								<span>AD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="985" data-idquest="985" type="radio" data-stt="31" value="b" />    								<span>AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="985" data-idquest="985" type="radio" data-stt="31" value="c" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="985" data-idquest="985" type="radio" data-stt="31" value="d" />    								<span>ABC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-32" class="item-quest">
					<div class="quest-title">Câu 32 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: K# mã khách hàng, KH tên khách hàng, DC địa chỉ và TK tài khoản. Chọn câu đúng sau đây khi in các khách hàng có số dư tài khoản nhỏ hơn của "Nga"</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="504" data-idquest="504" type="radio" data-stt="32" value="a" />    								<span>SELECT * FROM R WHERE KH = "Nga"</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="504" data-idquest="504" type="radio" data-stt="32" value="b" />    								<span>SELECT * FROM R a, R b WHERE a.TK \le b.TK AND b.KH = "Nga"</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="504" data-idquest="504" type="radio" data-stt="32" value="c" />    								<span>SELECT a.K#, a.KH, a.DC FROM R a, R b WHERE a.TK \le b.TK AND b.KH = "Nga"</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="504" data-idquest="504" type="radio" data-stt="32" value="d" />    								<span>SELECT * FROM R WHERE TK \le b.TK AND b.KH = "Nga"</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-33" class="item-quest">
					<div class="quest-title">Câu 33 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về các phụ thuộc đầy đủ:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="804" data-idquest="804" type="radio" data-stt="33" value="a" />    								<span>Các thuộc tính vế trái xác định vế phải.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="804" data-idquest="804" type="radio" data-stt="33" value="b" />    								<span>Các thuộc tính vế trái không xác định các thuộc tính thuộc vế phải.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="804" data-idquest="804" type="radio" data-stt="33" value="c" />    								<span>Các thuộc tính vế trái không xác định vế phải.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="804" data-idquest="804" type="radio" data-stt="33" value="d" />    								<span>Các thuộc tính vế phải không xác định vế trái.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-34" class="item-quest">
					<div class="quest-title">Câu 34 :</div>
					<div class="quest-content">
						<span>Mô hình ngoài là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="184" data-idquest="184" type="radio" data-stt="34" value="a" />    								<span>Nội dung thông tin của toàn bộ CSDL dưới cách nhìn của người sử dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="184" data-idquest="184" type="radio" data-stt="34" value="b" />    								<span>Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="184" data-idquest="184" type="radio" data-stt="34" value="c" />    								<span>Nội dung thông tin của toàn bộ CSDL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="184" data-idquest="184" type="radio" data-stt="34" value="d" />    								<span>Nội dung thông tin của một phần cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-35" class="item-quest">
					<div class="quest-title">Câu 35 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(I,Q,N,C,H) và tập phụ thuộc hàm F={IQ->NH, Q->C, C->I}. Phụ thuộc hàm nào sau đây không được suy diễn ra từ tập F?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="753" data-idquest="753" type="radio" data-stt="35" value="a" />    								<span>QN->CH</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="753" data-idquest="753" type="radio" data-stt="35" value="b" />    								<span>IQ->I</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="753" data-idquest="753" type="radio" data-stt="35" value="c" />    								<span>IC->NH</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="753" data-idquest="753" type="radio" data-stt="35" value="d" />    								<span>Q->H</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-36" class="item-quest">
					<div class="quest-title">Câu 36 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi thực hiện phép chiếu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="403" data-idquest="403" type="radio" data-stt="36" value="a" />    								<span>Trước khi thực hiện phép chọn, phân loại</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="403" data-idquest="403" type="radio" data-stt="36" value="b" />    								<span>Sau khi thực hiện phép chọn, phân loại</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="403" data-idquest="403" type="radio" data-stt="36" value="c" />    								<span>Sau khi thực hiện phép chọn, các phép theo nhóm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="403" data-idquest="403" type="radio" data-stt="36" value="d" />    								<span>Trước khi thực hiện phép chọn, các phép theo nhóm</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-37" class="item-quest">
					<div class="quest-title">Câu 37 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(G,M,V,N,H,P) và tập phụ thuộc hàm F={G->M,G->N, G->H, G->P , M->V, NHP->M}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="752" data-idquest="752" type="radio" data-stt="37" value="a" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="752" data-idquest="752" type="radio" data-stt="37" value="b" />    								<span>Dạng chuẩn Boyce-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="752" data-idquest="752" type="radio" data-stt="37" value="c" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="752" data-idquest="752" type="radio" data-stt="37" value="d" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-38" class="item-quest">
					<div class="quest-title">Câu 38 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: mã thuê bao, tên thuê bao, số điện thoại, địa chỉ. Chọn câu đúng sau đây khi tính tổng số lượng thuê bao</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="807" data-idquest="807" type="radio" data-stt="38" value="a" />    								<span>SELECT * FROM R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="807" data-idquest="807" type="radio" data-stt="38" value="b" />    								<span>SELECT COUNT( *) FROM R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="807" data-idquest="807" type="radio" data-stt="38" value="c" />    								<span>SELECT AVG FROM R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="807" data-idquest="807" type="radio" data-stt="38" value="d" />    								<span>SELECT SUM( *) FROM R</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-39" class="item-quest">
					<div class="quest-title">Câu 39 :</div>
					<div class="quest-content">
						<span>CSDL quản lý một công ty có nhiều phòng ban với các ràng buộc sau: mỗi phòng ban có một trưởng phòng, và mỗi nhân viên chỉ làm trưởng phòng tối đa một phòng. Một phòng có nhiều nhân viên làm việc. Mỗi nhân viên làm việc tại một phòng.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="883" data-idquest="883" type="radio" data-stt="39" value="a" />    								<span>ERD có 2 tập thực thể, 1 liên kết 1–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="883" data-idquest="883" type="radio" data-stt="39" value="b" />    								<span>ERD có 2 tập thực thể, 1 liên kết 1–N, 1 liên kết M-N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="883" data-idquest="883" type="radio" data-stt="39" value="c" />    								<span>ERD có 2 tập thực thể, 1 liên kết M–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="883" data-idquest="883" type="radio" data-stt="39" value="d" />    								<span>ERD có 2 tập thực thể, 2 liên kết 1–N</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-40" class="item-quest">
					<div class="quest-title">Câu 40 :</div>
					<div class="quest-content">
						<span>R(A,B,C,D,E,F), F={F→A, A→B, B→C, CD→E}. Bao đóng F+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="877" data-idquest="877" type="radio" data-stt="40" value="a" />    								<span>{A, B, C, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="877" data-idquest="877" type="radio" data-stt="40" value="b" />    								<span>{A, B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="877" data-idquest="877" type="radio" data-stt="40" value="c" />    								<span>{A, C, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="877" data-idquest="877" type="radio" data-stt="40" value="d" />    								<span>{F}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-41" class="item-quest">
					<div class="quest-title">Câu 41 :</div>
					<div class="quest-content">
						<span>Tối ưu hóa câu hỏi truy vấn dữ liệu là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="304" data-idquest="304" type="radio" data-stt="41" value="a" />    								<span>Quá trình biến đổi câu hỏi về dạng đơn giản</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="304" data-idquest="304" type="radio" data-stt="41" value="b" />    								<span>Quá trình biến đổi câu hỏi về dạng biểu thức quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="304" data-idquest="304" type="radio" data-stt="41" value="c" />    								<span>Quá trình biến đổi câu hỏi sao cho chi phí thời gian thực hiện là ít nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="304" data-idquest="304" type="radio" data-stt="41" value="d" />    								<span>Quá trình biến đổi câu hỏi về dạng quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-42" class="item-quest">
					<div class="quest-title">Câu 42 :</div>
					<div class="quest-content">
						<span>Thực thể Dependent có khóa là kết hợp của EmpID (khóa của Employee) và DepName . Phát biểu nào đúng về ERD?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1115" data-idquest="1115" type="radio" data-stt="42" value="a" />    								<span>Dependent là thực thể mạnh phải có mối quan hệ định danh với Employee.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1115" data-idquest="1115" type="radio" data-stt="42" value="b" />    								<span>Employee phụ thuộc vào Dependent để được định danh</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1115" data-idquest="1115" type="radio" data-stt="42" value="c" />    								<span>Dependentl à thực thể yếu phải có mối quan hệ định danh với Employee.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1115" data-idquest="1115" type="radio" data-stt="42" value="d" />    								<span>Employee là thực thể yếu phải có mối quan hệ định danh với Dependentl.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-43" class="item-quest">
					<div class="quest-title">Câu 43 :</div>
					<div class="quest-content">
						<span>Given COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Retrieve CIDs of courses in 'CS' Dept that have at least one enrollment record in '2025_Fall' Semester. Which expression is correct? (Cho COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Lấy CID của các môn thuộc 'CS' Dept có ít nhất một bản ghi đăng ký trong '2025_Fall' Semester. Biểu thức đúng là?)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1056" data-idquest="1056" type="radio" data-stt="43" value="a" />    								<span>﻿πCID(σSemester=′2025Fall′(COURSE⋈ENROLL))π_{CID}(σ_{Semester='2025_Fall'}(COURSE ⋈ ENROLL))πCID​(σSemester=′2025F​all′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1056" data-idquest="1056" type="radio" data-stt="43" value="b" />    								<span>﻿πCID(σDept=′CS′(COURSE))∩πCID(σSemester=′2025Fall′(ENROLL))π_{CID}(σ_{Dept='CS'}(COURSE)) ∩ π_{CID}(σ_{Semester='2025_Fall'}(ENROLL))πCID​(σDept=′CS′​(COURSE))∩πCID​(σSemester=′2025F​all′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1056" data-idquest="1056" type="radio" data-stt="43" value="c" />    								<span>﻿πCID(σDept=′CS′(COURSE))−πCID(σSemester=′2025Fall′(ENROLL))π_{CID}(σ_{Dept='CS'}(COURSE)) − π_{CID}(σ_{Semester='2025_Fall'}(ENROLL))πCID​(σDept=′CS′​(COURSE))−πCID​(σSemester=′2025F​all′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1056" data-idquest="1056" type="radio" data-stt="43" value="d" />    								<span>﻿πCID(σDept=′CS′∧Semester=′2025Fall′(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∧ Semester='2025_Fall'}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∧Semester=′2025F​all′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-44" class="item-quest">
					<div class="quest-title">Câu 44 :</div>
					<div class="quest-content">
						<span>R(A,B,C,D,E), F={A→BC, B→D, CD→E}. FD không tầm thường suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="872" data-idquest="872" type="radio" data-stt="44" value="a" />    								<span>D→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="872" data-idquest="872" type="radio" data-stt="44" value="b" />    								<span>E→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="872" data-idquest="872" type="radio" data-stt="44" value="c" />    								<span>B→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="872" data-idquest="872" type="radio" data-stt="44" value="d" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-45" class="item-quest">
					<div class="quest-title">Câu 45 :</div>
					<div class="quest-content">
						<span>Quy tắc phản xạ trong hệ tiên đề Armstrong</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="785" data-idquest="785" type="radio" data-stt="45" value="a" />    								<span>Nếu B là con của A thì B -->A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="785" data-idquest="785" type="radio" data-stt="45" value="b" />    								<span>Nếu B là con của A thì A -->B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="785" data-idquest="785" type="radio" data-stt="45" value="c" />    								<span>Nếu B là con của A thì B khác A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="785" data-idquest="785" type="radio" data-stt="45" value="d" />    								<span>Nếu B là con của A thì B=A</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-46" class="item-quest">
					<div class="quest-title">Câu 46 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: K# mã thuê bao, TB tên thuê bao, SDT số điện thoại, DC địa chỉ. Chọn câu đúng sau đây khi tính tổng thuê bao biểu diễn bằng đại số quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="496" data-idquest="496" type="radio" data-stt="46" value="a" />    								<span>σSDT(R)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="496" data-idquest="496" type="radio" data-stt="46" value="b" />    								<span>σSUM(*)(R)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="496" data-idquest="496" type="radio" data-stt="46" value="c" />    								<span>gammaCOUNT(*)(R) hoặc πK#, TB, DC, SDT(R) (ký hiệu gộp nhóm)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="496" data-idquest="496" type="radio" data-stt="46" value="d" />    								<span>σCOUNT(*)(R)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-47" class="item-quest">
					<div class="quest-title">Câu 47 :</div>
					<div class="quest-content">
						<span>Các bước thực hiện đúng trong câu lệnh SELECT</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="297" data-idquest="297" type="radio" data-stt="47" value="a" />    								<span>Phép toán chọn, tích Đề các, theo nhóm, phép chiếu và sắp xếp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="297" data-idquest="297" type="radio" data-stt="47" value="b" />    								<span>Tích Đề các, phép toán chọn, theo nhóm, sắp xếp và phép chiếu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="297" data-idquest="297" type="radio" data-stt="47" value="c" />    								<span>Phép toán chọn, tích Đề các, theo nhóm, sắp xếp và phép chiếu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="297" data-idquest="297" type="radio" data-stt="47" value="d" />    								<span>Tích Đề các, phép toán chọn, theo nhóm, phép chiếu và sắp xếp</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-48" class="item-quest">
					<div class="quest-title">Câu 48 :</div>
					<div class="quest-content">
						<span>Trong mô hình dữ liệu quan hệ, các đặc trưng riêng của đối tượng được gọi là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="726" data-idquest="726" type="radio" data-stt="48" value="a" />    								<span>Lựa chọn khác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="726" data-idquest="726" type="radio" data-stt="48" value="b" />    								<span>Thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="726" data-idquest="726" type="radio" data-stt="48" value="c" />    								<span>đặc trưng riêng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="726" data-idquest="726" type="radio" data-stt="48" value="d" />    								<span>quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-49" class="item-quest">
					<div class="quest-title">Câu 49 :</div>
					<div class="quest-content">
						<span>Trong CSDL mạng, khi thực hiện các phép tìm kiếm</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="213" data-idquest="213" type="radio" data-stt="49" value="a" />    								<span>CSDL càng lớn thì tìm kiếm càng phức tạp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="213" data-idquest="213" type="radio" data-stt="49" value="b" />    								<span>Câu hỏi và kết quả các câu hỏi tìm kiếm thường đối xứng với nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="213" data-idquest="213" type="radio" data-stt="49" value="c" />    								<span>Không phức tạp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="213" data-idquest="213" type="radio" data-stt="49" value="d" />    								<span>Câu hỏi và kết quả các câu hỏi tìm kiếm không đối xứng với nhau</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-50" class="item-quest">
					<div class="quest-title">Câu 50 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: "An toàn" cơ sở dữ liệu cần phải ..........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="476" data-idquest="476" type="radio" data-stt="50" value="a" />    								<span>Bảo đảm tính độc lập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="476" data-idquest="476" type="radio" data-stt="50" value="b" />    								<span>Bảo vệ, bảo đảm sự toàn vẹn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="476" data-idquest="476" type="radio" data-stt="50" value="c" />    								<span>Bảo vệ chống truy nhập trái phép</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="476" data-idquest="476" type="radio" data-stt="50" value="d" />    								<span>Bảo toàn dữ liệu khi thao tác trên nó</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-51" class="item-quest">
					<div class="quest-title">Câu 51 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R(A,B,C), F={A↔B, B→C}. Khóa là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1122" data-idquest="1122" type="radio" data-stt="51" value="a" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1122" data-idquest="1122" type="radio" data-stt="51" value="b" />    								<span>A, B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1122" data-idquest="1122" type="radio" data-stt="51" value="c" />    								<span>A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1122" data-idquest="1122" type="radio" data-stt="51" value="d" />    								<span>B</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-52" class="item-quest">
					<div class="quest-title">Câu 52 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(F,B,K,C,I) và tập phụ thuộc hàm T={FB->KI, B->C, C->F}. Phụ thuộc hàm nào sau đây không được suy diễn ra từ tập T?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="751" data-idquest="751" type="radio" data-stt="52" value="a" />    								<span>FB->F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="751" data-idquest="751" type="radio" data-stt="52" value="b" />    								<span>BK->CI</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="751" data-idquest="751" type="radio" data-stt="52" value="c" />    								<span>FC->KI</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="751" data-idquest="751" type="radio" data-stt="52" value="d" />    								<span>B->I</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-53" class="item-quest">
					<div class="quest-title">Câu 53 :</div>
					<div class="quest-content">
						<span>Mô hình dữ liệu nào có khả năng hạn chế sự dư thừa dữ liệu tốt hơn</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="199" data-idquest="199" type="radio" data-stt="53" value="a" />    								<span>Mô hình cơ sở dữ liệu phân cấp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="199" data-idquest="199" type="radio" data-stt="53" value="b" />    								<span>Mô hình cơ sở dữ liệu phân tán</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="199" data-idquest="199" type="radio" data-stt="53" value="c" />    								<span>Tất cả các loại mô hình dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="199" data-idquest="199" type="radio" data-stt="53" value="d" />    								<span>Mô hình dữ liệu hướng đối tượng</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-54" class="item-quest">
					<div class="quest-title">Câu 54 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D), F = {A→B, B→C, C→A}. Phân rã BCNF (lossless) với ít quan hệ nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="909" data-idquest="909" type="radio" data-stt="54" value="a" />    								<span>{R1(A,B), R2(B,C), R3(C,A), R4(C,D)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="909" data-idquest="909" type="radio" data-stt="54" value="b" />    								<span>{R1(A,C), R2(B,C), R3(B,D)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="909" data-idquest="909" type="radio" data-stt="54" value="c" />    								<span>{R1(A,B,C), R2(A,D)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="909" data-idquest="909" type="radio" data-stt="54" value="d" />    								<span>{R1(A,D), R2(B,D), R3(C,D)}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-55" class="item-quest">
					<div class="quest-title">Câu 55 :</div>
					<div class="quest-content">
						<span>Phụ thuộc nào sau đây là phụ thuộc đầy đủ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="240" data-idquest="240" type="radio" data-stt="55" value="a" />    								<span>(Số hóa đơn, mã khách hàng) → Họ tên khách hàng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="240" data-idquest="240" type="radio" data-stt="55" value="b" />    								<span>(Số chứng minh thư, mã nhân viên) → Quá trình công tác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="240" data-idquest="240" type="radio" data-stt="55" value="c" />    								<span>(Số thứ tự, mã lớp) → Họ tên sinh viên</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="240" data-idquest="240" type="radio" data-stt="55" value="d" />    								<span>(Mã báo, mã khách hàng) → Giá báo</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-56" class="item-quest">
					<div class="quest-title">Câu 56 :</div>
					<div class="quest-content">
						<span>Các toán hạng trong các phép toán là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="277" data-idquest="277" type="radio" data-stt="56" value="a" />    								<span>Các biểu thức</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="277" data-idquest="277" type="radio" data-stt="56" value="b" />    								<span>Các bộ n_giá trị</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="277" data-idquest="277" type="radio" data-stt="56" value="c" />    								<span>Các quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="277" data-idquest="277" type="radio" data-stt="56" value="d" />    								<span>Các thuộc tính</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-57" class="item-quest">
					<div class="quest-title">Câu 57 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(patient, consultant, hospital, address, date, time) với Khoa chính: (patient, consultant). Xác định dạng chuẩn cao nhất của R?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="578" data-idquest="578" type="radio" data-stt="57" value="a" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="578" data-idquest="578" type="radio" data-stt="57" value="b" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="578" data-idquest="578" type="radio" data-stt="57" value="c" />    								<span>Dạng chuẩn 1(1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="578" data-idquest="578" type="radio" data-stt="57" value="d" />    								<span>Dạng chuẩn Boyee-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-58" class="item-quest">
					<div class="quest-title">Câu 58 :</div>
					<div class="quest-content">
						<span>Mô hình cơ sở dữ liệu Client-Server:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="774" data-idquest="774" type="radio" data-stt="58" value="a" />    								<span>Máy chủ và máy đều tham gia quá trình xử lý.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="774" data-idquest="774" type="radio" data-stt="58" value="b" />    								<span>Các máy khách chia sẻ gánh nặng xử lý của máy chủ trung tâm.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="774" data-idquest="774" type="radio" data-stt="58" value="c" />    								<span>Máy khách thực hiện các ứng dụng, nó gửi yêu cầu về máy chủ được kết nối với cơ sở dữ liệu, máy chủ xử lý và gửi trả lại kết quả về máy khách.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="774" data-idquest="774" type="radio" data-stt="58" value="d" />    								<span>Máy khách yêu cầu máy chủ cung cấp các loại dịch vụ.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-59" class="item-quest">
					<div class="quest-title">Câu 59 :</div>
					<div class="quest-content">
						<span>Cho biết kết quả của câu truy vấn bằng SQL sau ? Select customer_name, telephone from customers where city in (‘Boston’,’New York’,’Denver’);</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="552" data-idquest="552" type="radio" data-stt="59" value="a" />    								<span>Danh sách các customer_name và telephone của tất cả các khách hàng có trong bảng customers.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="552" data-idquest="552" type="radio" data-stt="59" value="b" />    								<span>Danh sách các customer_name và telephone của tất cả các khách hàng đang sống ở Boston, New York hoặc Denver.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="552" data-idquest="552" type="radio" data-stt="59" value="c" />    								<span>Danh sách các customer_name và telephone của tất cả các khách hàng đang</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="552" data-idquest="552" type="radio" data-stt="59" value="d" />    								<span>Danh sách các customer_name của tất cả các khách hàng đang sống ở Boston, New York hoặc Denver.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-60" class="item-quest">
					<div class="quest-title">Câu 60 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy SID của sinh viên đã đăng ký ít nhất một môn Dept='CS' và ít nhất một môn Dept='IS'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="967" data-idquest="967" type="radio" data-stt="60" value="a" />    								<span>﻿πSID(σDept=′CS′∧Dept=′IS′(ENROLL⋈COURSE))π_{SID}(σ_{Dept='CS' ∧ Dept='IS'}(ENROLL ⋈ COURSE))πSID​(σDept=′CS′∧Dept=′IS′​(ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="967" data-idquest="967" type="radio" data-stt="60" value="b" />    								<span>﻿πSID(ENROLL)−πSID(ENROLL⋈σDept=′IS′(COURSE))π_{SID}(ENROLL) − π_{SID}(ENROLL ⋈ σ_{Dept='IS'}(COURSE))πSID​(ENROLL)−πSID​(ENROLL⋈σDept=′IS′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="967" data-idquest="967" type="radio" data-stt="60" value="c" />    								<span>﻿πSID(ENROLL⋈σDept=′CS′(COURSE))∪πSID(ENROLL⋈σDept=′IS′(COURSE))π_{SID}(ENROLL ⋈ σ_{Dept='CS'}(COURSE)) ∪ π_{SID}(ENROLL ⋈ σ_{Dept='IS'}(COURSE))πSID​(ENROLL⋈σDept=′CS′​(COURSE))∪πSID​(ENROLL⋈σDept=′IS′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="967" data-idquest="967" type="radio" data-stt="60" value="d" />    								<span>﻿πSID(ENROLL⋈σDept=′CS′(COURSE))∩πSID(ENROLL⋈σDept=′IS′(COURSE))π_{SID}(ENROLL ⋈ σ_{Dept='CS'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Dept='IS'}(COURSE))πSID​(ENROLL⋈σDept=′CS′​(COURSE))∩πSID​(ENROLL⋈σDept=′IS′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-61" class="item-quest">
					<div class="quest-title">Câu 61 :</div>
					<div class="quest-content">
						<span>Trong SQL, làm thế nào để chọn tất cả các bản ghi từ bảng Persons với giá trị trong cột FirstName bắt đầu bằng giá trị a:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="831" data-idquest="831" type="radio" data-stt="61" value="a" />    								<span>Selet * From Persons Where FirstName = 'a'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="831" data-idquest="831" type="radio" data-stt="61" value="b" />    								<span>Selet [all] From Persons Where FirstName like '*a'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="831" data-idquest="831" type="radio" data-stt="61" value="c" />    								<span>Selet * From Persons Where FirstName like 'a*'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="831" data-idquest="831" type="radio" data-stt="61" value="d" />    								<span>Selet [all] From Persons Where FirstName like 'a%'</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-62" class="item-quest">
					<div class="quest-title">Câu 62 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy SID của sinh viên đã đăng ký ít nhất 2 môn khác nhau trong Semester='2025_Fall'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="864" data-idquest="864" type="radio" data-stt="62" value="a" />    								<span>﻿πSID(ρE1(σSemester=′2025_Fall′(ENROLL))⋈E1.CID=E2.CIDρE2(σSemester=′2025_Fall′(ENROLL)))π_{SID}( ρ_{E1}(σ_{Semester='2025\_Fall'}(ENROLL)) ⋈_{E1.CID=E2.CID} ρ_{E2}(σ_{Semester='2025\_Fall'}(ENROLL)) )πSID​(ρE1​(σSemester=′2025_Fall′​(ENROLL))⋈E1.CID=E2.CID​ρE2​(σSemester=′2025_Fall′​(ENROLL)))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="864" data-idquest="864" type="radio" data-stt="62" value="b" />    								<span>﻿πSID(σSemester=′2025Fall′(ENROLL))π_{SID}(σ_{Semester='2025_Fall'}(ENROLL))πSID​(σSemester=′2025F​all′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="864" data-idquest="864" type="radio" data-stt="62" value="c" />    								<span>﻿πE1.SID(ρE1(σSemester=′2025_Fall′(ENROLL))⋈E1.SID=E2.SID∧E1.CID≠E2.CIDρE2(σSemester=′2025_Fall′(ENROLL)))π_{E1.SID}( ρ_{E1}(σ_{Semester='2025\_Fall'}(ENROLL)) ⋈_{E1.SID=E2.SID ∧ E1.CID≠E2.CID} ρ_{E2}(σ_{Semester='2025\_Fall'}(ENROLL)) )πE1.SID​(ρE1​(σSemester=′2025_Fall′​(ENROLL))⋈E1.SID=E2.SID∧E1.CID=E2.CID​ρE2​(σSemester=′2025_Fall′​(ENROLL)))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="864" data-idquest="864" type="radio" data-stt="62" value="d" />    								<span>﻿πCID(ρE1(σSemester=′2025_Fall′(ENROLL))⋈E1.SID=E2.SIDρE2(σSemester=′202_Fall′(ENROLL)))π_{CID}( ρ_{E1}(σ_{Semester='2025\_Fall'}(ENROLL)) ⋈_{E1.SID=E2.SID} ρ_{E2}(σ_{Semester='202\_Fall'}(ENROLL)) )πCID​(ρE1​(σSemester=′2025_Fall′​(ENROLL))⋈E1.SID=E2.SID​ρE2​(σSemester=′202_Fall′​(ENROLL)))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-63" class="item-quest">
					<div class="quest-title">Câu 63 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy Name của sinh viên Major='IS' nhưng KHÔNG đăng ký bất kỳ môn nào thuộc Dept='IS'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="969" data-idquest="969" type="radio" data-stt="63" value="a" />    								<span>﻿πName(σMajor=′IS′(STUDENT))∩πName(σDept=′IS′(STUDENT⋈ENROLL⋈COURSE))π_{Name}(σ_{Major='IS'}(STUDENT)) ∩ π_{Name}(σ_{Dept='IS'}(STUDENT ⋈ ENROLL ⋈ COURSE))πName​(σMajor=′IS′​(STUDENT))∩πName​(σDept=′IS′​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="969" data-idquest="969" type="radio" data-stt="63" value="b" />    								<span>﻿πName(σMajor=′IS′∧Dept=′IS′(STUDENT⋈ENROLL⋈COURSE))π_{Name}(σ_{Major='IS' ∧ Dept='IS'}(STUDENT ⋈ ENROLL ⋈ COURSE))πName​(σMajor=′IS′∧Dept=′IS′​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="969" data-idquest="969" type="radio" data-stt="63" value="c" />    								<span>﻿πName(σDept=′IS′(STUDENT⋈ENROLL⋈COURSE))−πName(σMajor=′IS′(STUDENT))π_{Name}(σ_{Dept='IS'}(STUDENT ⋈ ENROLL ⋈ COURSE)) − π_{Name}(σ_{Major='IS'}(STUDENT))πName​(σDept=′IS′​(STUDENT⋈ENROLL⋈COURSE))−πName​(σMajor=′IS′​(STUDENT))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="969" data-idquest="969" type="radio" data-stt="63" value="d" />    								<span>﻿πName(σMajor=′IS′(STUDENT))−πName(σMajor=′IS′∧Dept=′IS′(STUDENT⋈ENROLL⋈COURSE))π_{Name}(σ_{Major='IS'}(STUDENT)) − π_{Name}(σ_{Major='IS' ∧ Dept='IS'}(STUDENT ⋈ ENROLL ⋈ COURSE))πName​(σMajor=′IS′​(STUDENT))−πName​(σMajor=′IS′∧Dept=′IS′​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-64" class="item-quest">
					<div class="quest-title">Câu 64 :</div>
					<div class="quest-content">
						<span>Cho lược đồ Cơ Sở Dữ liệu sau: NhanVien ( MaNV, HoNV, TenNV, DiaChi, ThanhPho ) KhachHang( MaKH, TenKH, DiaChi, ThanhPho, SoDu, GioiHanTinDung) HoaDon( MaHD, NgayLapHoaDon, MaKH, MaNV) ChiTietHoaDon (MaHD, MaSP, SoLuong,GiaBan ) SanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc) Dựa vào lược đồ Cơ Sở Dữ liệu trên,Hãy liệt kê tất cả các thông tin Khách hàng có giới hạn tín dụng là 7500.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="572" data-idquest="572" type="radio" data-stt="64" value="a" />    								<span>SELECT * From KhachHang WHERE GioiHanTinDung=7500</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="572" data-idquest="572" type="radio" data-stt="64" value="b" />    								<span>SELECT MaKH WHERE GioiHanTinDung=7500</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="572" data-idquest="572" type="radio" data-stt="64" value="c" />    								<span>SELECT MaNV WHERE GioiHanTinDung=7500</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="572" data-idquest="572" type="radio" data-stt="64" value="d" />    								<span>SELECT KhachHang WHERE GioiHanTinDung=’7500’</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-65" class="item-quest">
					<div class="quest-title">Câu 65 :</div>
					<div class="quest-content">
						<span>Quan hệ R được gọi là dạng chuẩn 2NF, khi và chỉ khi</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="267" data-idquest="267" type="radio" data-stt="65" value="a" />    								<span>Tồn tại X → Y ∈ F⁺ sao cho X là tập con của khóa và Y là thuộc tính không khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="267" data-idquest="267" type="radio" data-stt="65" value="b" />    								<span>1NF và tồn tại các thuộc tính không khóa phụ thuộc đầy đủ vào khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="267" data-idquest="267" type="radio" data-stt="65" value="c" />    								<span>1NF và các thuộc tính không khóa phụ thuộc đầy đủ vào khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="267" data-idquest="267" type="radio" data-stt="65" value="d" />    								<span>1NF và các thuộc tính không khóa phụ thuộc không đầy đủ vào khóa</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-66" class="item-quest">
					<div class="quest-title">Câu 66 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, C→D, D→E}. Phụ thuộc hàm nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="994" data-idquest="994" type="radio" data-stt="66" value="a" />    								<span>B→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="994" data-idquest="994" type="radio" data-stt="66" value="b" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="994" data-idquest="994" type="radio" data-stt="66" value="c" />    								<span>E→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="994" data-idquest="994" type="radio" data-stt="66" value="d" />    								<span>AB→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-67" class="item-quest">
					<div class="quest-title">Câu 67 :</div>
					<div class="quest-content">
						<span>Một bảng đạt dạng chuẩn 1 (1NF):</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="666" data-idquest="666" type="radio" data-stt="67" value="a" />    								<span>Không rỗng và chỉ chứa các trị nguyên tố.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="666" data-idquest="666" type="radio" data-stt="67" value="b" />    								<span>Không rỗng và toàn bộ các thuộc tính cuả mọi bộ đều mang giá trị đơn.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="666" data-idquest="666" type="radio" data-stt="67" value="c" />    								<span>Không rỗng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="666" data-idquest="666" type="radio" data-stt="67" value="d" />    								<span>Không có sự lặp lại các thuộc tính và các nhóm trị.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-68" class="item-quest">
					<div class="quest-title">Câu 68 :</div>
					<div class="quest-content">
						<span>Ngôn ngữ thao tác dữ liệu :</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="777" data-idquest="777" type="radio" data-stt="68" value="a" />    								<span>Là các phép toán được xây dựng trên đại số quan hệ.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="777" data-idquest="777" type="radio" data-stt="68" value="b" />    								<span>Là các phép toán: hợp, giao, trừ...</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="777" data-idquest="777" type="radio" data-stt="68" value="c" />    								<span>Là các phép toán số học</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="777" data-idquest="777" type="radio" data-stt="68" value="d" />    								<span>Là các phép chèn thêm, sửa đổi và loại bỏ.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-69" class="item-quest">
					<div class="quest-title">Câu 69 :</div>
					<div class="quest-content">
						<span>Cho CSDL gồm các bảng sau: SinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc) KetQua(MaSV,MaMH,Diem) MonHoc(MaMH,TenMH) Cho 2 câu truy vấn SQL sau: SELECT MaSV FROM SinhVien WHERE MaSV not in (Select MaSV from KetQua where MaMH='CSDL') SELECT MaSV FROM SinhVien s WHERE not exists (Select MaSV from KetQua d where MaMH='CSDL' and s.masv=d.masv) Chọn câu trả lời đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="565" data-idquest="565" type="radio" data-stt="69" value="a" />    								<span>Câu truy vấn thứ nhất sẽ trả về số bộ nhiều hơn câu truy vấn thứ hai.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="565" data-idquest="565" type="radio" data-stt="69" value="b" />    								<span>Câu truy vấn thứ hai bị lỗi.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="565" data-idquest="565" type="radio" data-stt="69" value="c" />    								<span>Câu truy vấn thứ nhất sẽ trả về số bộ ít hơn câu truy vấn thứ hai.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="565" data-idquest="565" type="radio" data-stt="69" value="d" />    								<span>Cả hai câu truy vấn trên cho cùng một kết quả.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-70" class="item-quest">
					<div class="quest-title">Câu 70 :</div>
					<div class="quest-content">
						<span>Có thể có bao nhiêu khóa chính trong 1 bảng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="850" data-idquest="850" type="radio" data-stt="70" value="a" />    								<span>Phụ thuộc vào số lượng cột của bảng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="850" data-idquest="850" type="radio" data-stt="70" value="b" />    								<span>Phụ thuộc vào người thiết kế hoặc quản trị CSDL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="850" data-idquest="850" type="radio" data-stt="70" value="c" />    								<span>Một</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="850" data-idquest="850" type="radio" data-stt="70" value="d" />    								<span>Hai</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-71" class="item-quest">
					<div class="quest-title">Câu 71 :</div>
					<div class="quest-content">
						<span>Mô hình thực thể quan hệ cho phép mô tả</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="222" data-idquest="222" type="radio" data-stt="71" value="a" />    								<span>Lược đồ khái niệm của một tổ chức</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="222" data-idquest="222" type="radio" data-stt="71" value="b" />    								<span>Bộ sưu tập các loại dữ liệu của một tổ chức</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="222" data-idquest="222" type="radio" data-stt="71" value="c" />    								<span>Hệ thống thông tin quản lý của tổ chức</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="222" data-idquest="222" type="radio" data-stt="71" value="d" />    								<span>Cấu trúc hệ thống cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-72" class="item-quest">
					<div class="quest-title">Câu 72 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn không thuộc Dept='CS' nhưng có ít nhất một đăng ký trong Semester='2025_Spring'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1013" data-idquest="1013" type="radio" data-stt="72" value="a" />    								<span>﻿πCID(σDept<>′CS′∧Semester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Dept<>'CS' ∧ Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σDept<>′CS′∧Semester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1013" data-idquest="1013" type="radio" data-stt="72" value="b" />    								<span>﻿πCID(σSemester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σSemester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1013" data-idquest="1013" type="radio" data-stt="72" value="c" />    								<span>﻿πCID(σDept=′CS′∧Semester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∧ Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∧Semester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1013" data-idquest="1013" type="radio" data-stt="72" value="d" />    								<span>﻿πCID(σDept<>′CS′(COURSE))∪πCID(σSemester=′2025_Spring′(ENROLL))π_{CID}(σ_{Dept<>'CS'}(COURSE)) ∪ π_{CID}(σ_{Semester='2025\_Spring'}(ENROLL))πCID​(σDept<>′CS′​(COURSE))∪πCID​(σSemester=′2025_Spring′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-73" class="item-quest">
					<div class="quest-title">Câu 73 :</div>
					<div class="quest-content">
						<span>F = {A → B, B → C, BC → D, DA → B}</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="244" data-idquest="244" type="radio" data-stt="73" value="a" />    								<span>A⁺ = ABCD và A → AD ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="244" data-idquest="244" type="radio" data-stt="73" value="b" />    								<span>A⁺ = ABCD và A → AD ∉ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="244" data-idquest="244" type="radio" data-stt="73" value="c" />    								<span>A⁺ = ABC và A → AD ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="244" data-idquest="244" type="radio" data-stt="73" value="d" />    								<span>A = ABCD và A → AD ∈ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-74" class="item-quest">
					<div class="quest-title">Câu 74 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Cấu trúc dữ liệu trong mô hình CSDL quan hệ đơn giản, thông tin về các thực thể và ràng buộc của các thực thể .......... trong các bảng, trong suốt với người sử dụng.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="435" data-idquest="435" type="radio" data-stt="74" value="a" />    								<span>Được biểu diễn duy nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="435" data-idquest="435" type="radio" data-stt="74" value="b" />    								<span>Mô tả logic</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="435" data-idquest="435" type="radio" data-stt="74" value="c" />    								<span>Cấu trúc đơn giản</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="435" data-idquest="435" type="radio" data-stt="74" value="d" />    								<span>Được biểu diễn bằng nhiều cách khác nhau</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-75" class="item-quest">
					<div class="quest-title">Câu 75 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi định nghĩa phép chiếu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="342" data-idquest="342" type="radio" data-stt="75" value="a" />    								<span>πA_{j1, Aj2, ..., Ajk}(R) := {⟨ aj1, aj2, ..., ajk⟩}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="342" data-idquest="342" type="radio" data-stt="75" value="b" />    								<span>Cả ba đều sai</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="342" data-idquest="342" type="radio" data-stt="75" value="c" />    								<span>πA_{j1, Aj2, ..., Ajk}(R) = {⟨ aj1, aj2, ..., ajk⟩ | aji ∈ Dom(Aji), j_i = j₁ ÷ j_k}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="342" data-idquest="342" type="radio" data-stt="75" value="d" />    								<span>π(R) := {⟨ aj1, aj2, ..., ajk⟩ | aji ∈ Dom(Aji), j_i = j₁ ÷ j_k}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-76" class="item-quest">
					<div class="quest-title">Câu 76 :</div>
					<div class="quest-content">
						<span>F={AB→C, BC→D, CD→A, AD→B}. Khẳng định nào dưới đây là đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1139" data-idquest="1139" type="radio" data-stt="76" value="a" />    								<span>Chỉ BC là khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1139" data-idquest="1139" type="radio" data-stt="76" value="b" />    								<span>Không có khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1139" data-idquest="1139" type="radio" data-stt="76" value="c" />    								<span>Mọi vế trái là khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1139" data-idquest="1139" type="radio" data-stt="76" value="d" />    								<span>Chỉ AB là khóa</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-77" class="item-quest">
					<div class="quest-title">Câu 77 :</div>
					<div class="quest-content">
						<span>Thực thể Product có thuộc tính Tag đa trị. Quan hệ nào dưới là đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1118" data-idquest="1118" type="radio" data-stt="77" value="a" />    								<span>PRODUCT(PID PK); PRODUCT_TAG(PID FK, Tag, PK(PID,Tag))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1118" data-idquest="1118" type="radio" data-stt="77" value="b" />    								<span>TAG(Tag PK); PRODUCT(PID PK, Tag FK)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1118" data-idquest="1118" type="radio" data-stt="77" value="c" />    								<span>PRODUCT(PID PK, Tags TEXT)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1118" data-idquest="1118" type="radio" data-stt="77" value="d" />    								<span>PRODUCT(PID PK, Tag1, Tag2, Tag3)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-78" class="item-quest">
					<div class="quest-title">Câu 78 :</div>
					<div class="quest-content">
						<span>F={A→B, B→C, AC→D}. Mệnh đề nào đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1200" data-idquest="1200" type="radio" data-stt="78" value="a" />    								<span>A↛C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1200" data-idquest="1200" type="radio" data-stt="78" value="b" />    								<span>A→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1200" data-idquest="1200" type="radio" data-stt="78" value="c" />    								<span>D→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1200" data-idquest="1200" type="radio" data-stt="78" value="d" />    								<span>C→A</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-79" class="item-quest">
					<div class="quest-title">Câu 79 :</div>
					<div class="quest-content">
						<span>Let R(A,B,C,D,E), F = {AB→CD, C→E, E→B}. What is (AB)+? (Cho R(A,B,C,D,E), F = {AB→CD, C→E, E→B}. Bao đóng (AB)+ là:)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1067" data-idquest="1067" type="radio" data-stt="79" value="a" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1067" data-idquest="1067" type="radio" data-stt="79" value="b" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1067" data-idquest="1067" type="radio" data-stt="79" value="c" />    								<span>{A, B, D, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1067" data-idquest="1067" type="radio" data-stt="79" value="d" />    								<span>{A, B, C}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-80" class="item-quest">
					<div class="quest-title">Câu 80 :</div>
					<div class="quest-content">
						<span>Một bảng mà không có sự lặp lại ở một nhóm trị, với khoá chính chỉ có một thuộc tính, và có một phụ thuộc bắc cầu vi phạm. Vậy bảng này ở dạng chuẩn nào?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="670" data-idquest="670" type="radio" data-stt="80" value="a" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="670" data-idquest="670" type="radio" data-stt="80" value="b" />    								<span>Dạng chuẩn Boyce-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="670" data-idquest="670" type="radio" data-stt="80" value="c" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="670" data-idquest="670" type="radio" data-stt="80" value="d" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-81" class="item-quest">
					<div class="quest-title">Câu 81 :</div>
					<div class="quest-content">
						<span>Gỉa sử quan hệ R([K, W], U ,I, Z) đạt 3NF. Phụ thuộc hàm nào sau đây là sai?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="619" data-idquest="619" type="radio" data-stt="81" value="a" />    								<span>K, W->U</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="619" data-idquest="619" type="radio" data-stt="81" value="b" />    								<span>Lựa chọn khác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="619" data-idquest="619" type="radio" data-stt="81" value="c" />    								<span>K, W->I</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="619" data-idquest="619" type="radio" data-stt="81" value="d" />    								<span>U, I->Z</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-82" class="item-quest">
					<div class="quest-title">Câu 82 :</div>
					<div class="quest-content">
						<span>Một lược đồ quan hệ mà các thuộc tính không khóa đều phụ thuộc đầy đủ vào khóa thì sẽ đạt chuẩn:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="685" data-idquest="685" type="radio" data-stt="82" value="a" />    								<span>Dạng chuẩn Boyce-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="685" data-idquest="685" type="radio" data-stt="82" value="b" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="685" data-idquest="685" type="radio" data-stt="82" value="c" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="685" data-idquest="685" type="radio" data-stt="82" value="d" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-83" class="item-quest">
					<div class="quest-title">Câu 83 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→D, D→E, C→A}. Khóa ứng viên (khoá dự bị) của R là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1007" data-idquest="1007" type="radio" data-stt="83" value="a" />    								<span>BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1007" data-idquest="1007" type="radio" data-stt="83" value="b" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1007" data-idquest="1007" type="radio" data-stt="83" value="c" />    								<span>CD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1007" data-idquest="1007" type="radio" data-stt="83" value="d" />    								<span>AC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-84" class="item-quest">
					<div class="quest-title">Câu 84 :</div>
					<div class="quest-content">
						<span>Cho bảng T(P,O,C) và các phụ thuộc hàm sau: P->O, P->C, C->O. Loại phụ thuộc hàm tồn tại trong lược đồ CSDL trên:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="546" data-idquest="546" type="radio" data-stt="84" value="a" />    								<span>Phụ thuộc đầy đủ.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="546" data-idquest="546" type="radio" data-stt="84" value="b" />    								<span>Phụ thuộc bắc cầu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="546" data-idquest="546" type="radio" data-stt="84" value="c" />    								<span>Phụ thuộc hàm hiển nhiên.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="546" data-idquest="546" type="radio" data-stt="84" value="d" />    								<span>Phụ thuộc riêng phần.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-85" class="item-quest">
					<div class="quest-title">Câu 85 :</div>
					<div class="quest-content">
						<span>Trong mô hình ERD, thuộc tính đa trị được biểu diễn bằng:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1212" data-idquest="1212" type="radio" data-stt="85" value="a" />    								<span>Hình elip đôi</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1212" data-idquest="1212" type="radio" data-stt="85" value="b" />    								<span>Hình thoi</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1212" data-idquest="1212" type="radio" data-stt="85" value="c" />    								<span>Hình elip nét đứt</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1212" data-idquest="1212" type="radio" data-stt="85" value="d" />    								<span>Hình chữ nhật</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-86" class="item-quest">
					<div class="quest-title">Câu 86 :</div>
					<div class="quest-content">
						<span>Một bảng có một khoá duy nhất (unique key). Một câu truy vấn thực hiện một phép kết bằng trên bảng này với chính nó thông qua khoá này. Bảng này có n dòng. Một dòng có giá trị khoá là rỗng (null). Kết quả cuả câu truy vấn trả về bao nhiêu dòng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="664" data-idquest="664" type="radio" data-stt="86" value="a" />    								<span>Nhiều hơn n dòng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="664" data-idquest="664" type="radio" data-stt="86" value="b" />    								<span>n dòng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="664" data-idquest="664" type="radio" data-stt="86" value="c" />    								<span>không có dòng nào cả.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="664" data-idquest="664" type="radio" data-stt="86" value="d" />    								<span>ít hơn n dòng.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-87" class="item-quest">
					<div class="quest-title">Câu 87 :</div>
					<div class="quest-content">
						<span>Mệnh đề SQL nào được dùng để cập nhật dữ liệu từ cơ sở dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="827" data-idquest="827" type="radio" data-stt="87" value="a" />    								<span>Save as</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="827" data-idquest="827" type="radio" data-stt="87" value="b" />    								<span>Modify</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="827" data-idquest="827" type="radio" data-stt="87" value="c" />    								<span>Update</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="827" data-idquest="827" type="radio" data-stt="87" value="d" />    								<span>Alter</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-88" class="item-quest">
					<div class="quest-title">Câu 88 :</div>
					<div class="quest-content">
						<span>Truy vấn sau đây tương đương với truy vấn nào?

SELECT name, course_id 
FROM instructor, teaches 
WHERE instructor_ID= teaches_ID;</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="834" data-idquest="834" type="radio" data-stt="88" value="a" />    								<span>SELECT name, course_id 
FROM instructor;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="834" data-idquest="834" type="radio" data-stt="88" value="b" />    								<span>SELECT course_id 
FROM instructor 
JOIN teaches;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="834" data-idquest="834" type="radio" data-stt="88" value="c" />    								<span>SELECT name, course_id 
FROM instructor 
NATURAL JOIN teaches;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="834" data-idquest="834" type="radio" data-stt="88" value="d" />    								<span>SELECT name,course_id 
FROM teaches,instructor 
WHERE instructor_id=course_id;</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-89" class="item-quest">
					<div class="quest-title">Câu 89 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về khái niệm mô hình cơ sở dữ liệu Client - Server</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="334" data-idquest="334" type="radio" data-stt="89" value="a" />    								<span>Máy khách truy xuất cơ sở dữ liệu trên máy chủ qua môi trường mạng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="334" data-idquest="334" type="radio" data-stt="89" value="b" />    								<span>Các máy khách chia sẻ xử lý thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="334" data-idquest="334" type="radio" data-stt="89" value="c" />    								<span>Khi máy khách thực hiện các ứng dụng, nó gửi yêu cầu về máy chủ được kết nối với cơ sở dữ liệu, máy chủ xử lý và gửi trả lại kết quả về máy khách</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="334" data-idquest="334" type="radio" data-stt="89" value="d" />    								<span>Máy chủ và máy khách có quyền truy xuất cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-90" class="item-quest">
					<div class="quest-title">Câu 90 :</div>
					<div class="quest-content">
						<span>Dữ liệu trong mô hình quan hệ:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="776" data-idquest="776" type="radio" data-stt="90" value="a" />    								<span>Được biểu diễn theo cấu trúc hình cây.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="776" data-idquest="776" type="radio" data-stt="90" value="b" />    								<span>Được biểu diễn theo cấu trúc mô hình mạng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="776" data-idquest="776" type="radio" data-stt="90" value="c" />    								<span>Được biểu diễn nhiều kiểu khác nhau.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="776" data-idquest="776" type="radio" data-stt="90" value="d" />    								<span>Được biểu diễn theo cấu trúc bảng.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-91" class="item-quest">
					<div class="quest-title">Câu 91 :</div>
					<div class="quest-content">
						<span>Người sử dụng có thể hiểu được một cơ sở dữ liệu thông qua một tập hợp các bảng, đó gọi là mô hình gì?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="698" data-idquest="698" type="radio" data-stt="91" value="a" />    								<span>Hướng đối tượng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="698" data-idquest="698" type="radio" data-stt="91" value="b" />    								<span>Phân cấp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="698" data-idquest="698" type="radio" data-stt="91" value="c" />    								<span>Mạng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="698" data-idquest="698" type="radio" data-stt="91" value="d" />    								<span>Quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-92" class="item-quest">
					<div class="quest-title">Câu 92 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Giá trị các thành phần của khoá ..........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="446" data-idquest="446" type="radio" data-stt="92" value="a" />    								<span>Có thể nhận giá trị null hay các giá trị không xác định</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="446" data-idquest="446" type="radio" data-stt="92" value="b" />    								<span>Không thể nhận giá trị null và chấp nhận các giá trị không xác định</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="446" data-idquest="446" type="radio" data-stt="92" value="c" />    								<span>Không thể nhận giá trị null hay các giá trị không xác định</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="446" data-idquest="446" type="radio" data-stt="92" value="d" />    								<span>Có thể nhận giá trị các giá trị không xác định</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-93" class="item-quest">
					<div class="quest-title">Câu 93 :</div>
					<div class="quest-content">
						<span>Mối quan hệ “Khoa – Trưởng khoa” (một khoa có đúng một trưởng khoa, một giảng viên chỉ có thể làm trưởng cho một khoa) là loại quan hệ gì?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1213" data-idquest="1213" type="radio" data-stt="93" value="a" />    								<span>1–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1213" data-idquest="1213" type="radio" data-stt="93" value="b" />    								<span>Tự liên kết</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1213" data-idquest="1213" type="radio" data-stt="93" value="c" />    								<span>N–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1213" data-idquest="1213" type="radio" data-stt="93" value="d" />    								<span>1–1</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-94" class="item-quest">
					<div class="quest-title">Câu 94 :</div>
					<div class="quest-content">
						<span>Một field dùng để định danh 1 dòng dữ liệu trong bảng gọi là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="674" data-idquest="674" type="radio" data-stt="94" value="a" />    								<span>Tiêu đề</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="674" data-idquest="674" type="radio" data-stt="94" value="b" />    								<span>Dòng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="674" data-idquest="674" type="radio" data-stt="94" value="c" />    								<span>Định danh query</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="674" data-idquest="674" type="radio" data-stt="94" value="d" />    								<span>Khóa chính</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-95" class="item-quest">
					<div class="quest-title">Câu 95 :</div>
					<div class="quest-content">
						<span>Mệnh đề WHERE trong ngôn ngữ truy vấn dữ liệu SQL có tác dụng:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="651" data-idquest="651" type="radio" data-stt="95" value="a" />    								<span>Xác định nguồn dữ liệu trong truy vấn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="651" data-idquest="651" type="radio" data-stt="95" value="b" />    								<span>Thiết lập điều kiện</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="651" data-idquest="651" type="radio" data-stt="95" value="c" />    								<span>Giới hạn số cột trong kết quả</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="651" data-idquest="651" type="radio" data-stt="95" value="d" />    								<span>Lựa chọn khác</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-96" class="item-quest">
					<div class="quest-title">Câu 96 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="370" data-idquest="370" type="radio" data-stt="96" value="a" />    								<span>Mỗi một giá trị của khóa xác định các giá trị của các thuộc tính không khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="370" data-idquest="370" type="radio" data-stt="96" value="b" />    								<span>Các thuộc tính không khóa phụ thuộc đầy đủ vào khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="370" data-idquest="370" type="radio" data-stt="96" value="c" />    								<span>Giá trị các khóa có thể trùng nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="370" data-idquest="370" type="radio" data-stt="96" value="d" />    								<span>X là khóa nếu: X⁺ = Ω và (X - A)⁺ ≠ Ω, ∀ A ∈ X</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-97" class="item-quest">
					<div class="quest-title">Câu 97 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(B,F,D,H,I) và tập phụ thuộc hàm T={B->HI,H->FD,BD->F}. Tìm bao đóng cuả tập thuộc tính {BH}.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="746" data-idquest="746" type="radio" data-stt="97" value="a" />    								<span>{FDHI}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="746" data-idquest="746" type="radio" data-stt="97" value="b" />    								<span>{BFHI}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="746" data-idquest="746" type="radio" data-stt="97" value="c" />    								<span>{BFDH}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="746" data-idquest="746" type="radio" data-stt="97" value="d" />    								<span>{BFDHI}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-98" class="item-quest">
					<div class="quest-title">Câu 98 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {ABD→C, AB→C, C→E}. Thuộc tính nào thừa ở vế trái của ABD→C?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="992" data-idquest="992" type="radio" data-stt="98" value="a" />    								<span>D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="992" data-idquest="992" type="radio" data-stt="98" value="b" />    								<span>B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="992" data-idquest="992" type="radio" data-stt="98" value="c" />    								<span>Không có thuộc tính thừa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="992" data-idquest="992" type="radio" data-stt="98" value="d" />    								<span>A</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-99" class="item-quest">
					<div class="quest-title">Câu 99 :</div>
					<div class="quest-content">
						<span>Cho lược đồ Cơ sở dữ liệu sau: SinhVien(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop) Lop(MaLop, TenLop, MaKhoa, GVCN) KetQua(MaSV, MaMH, LanThi, Diem) MonHoc(MaMH, TenMH, SoTinChi) Liệt kê danh sách các sinh viên gồm (MaSV, HoSV, TenSV) đăng ký ít nhất là 3 môn học.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="575" data-idquest="575" type="radio" data-stt="99" value="a" />    								<span>Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K Where S.MaSV=K.MaSV Having count(MaMH)>=3</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="575" data-idquest="575" type="radio" data-stt="99" value="b" />    								<span>Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K Where S.MaSV=K.MaSV Group by K.MaSV, HoSV, TenSV Having count(MaMH)>=3</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="575" data-idquest="575" type="radio" data-stt="99" value="c" />    								<span>Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="575" data-idquest="575" type="radio" data-stt="99" value="d" />    								<span>Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K Where S.MASV=K.MASV And count(MaMH)>=3</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-100" class="item-quest">
					<div class="quest-title">Câu 100 :</div>
					<div class="quest-content">
						<span>Mục đích chính của phép đổi tên ρ trong join tự nhiên là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1180" data-idquest="1180" type="radio" data-stt="100" value="a" />    								<span>Sắp xếp kết quả</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1180" data-idquest="1180" type="radio" data-stt="100" value="b" />    								<span>Xóa thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1180" data-idquest="1180" type="radio" data-stt="100" value="c" />    								<span>Loại bỏ bộ trùng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1180" data-idquest="1180" type="radio" data-stt="100" value="d" />    								<span>Tránh đụng tên thuộc tính trước khi join</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-101" class="item-quest">
					<div class="quest-title">Câu 101 :</div>
					<div class="quest-content">
						<span>Hệ tiên đề Armstrong cho các phụ thuộc hàm gồm các quy tắc</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="231" data-idquest="231" type="radio" data-stt="101" value="a" />    								<span>Phản xạ, gia tăng, bắc cầu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="231" data-idquest="231" type="radio" data-stt="101" value="b" />    								<span>Phản xạ, gia tăng, hợp và tách</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="231" data-idquest="231" type="radio" data-stt="101" value="c" />    								<span>Phản xạ, bắc cầu, hợp và tách</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="231" data-idquest="231" type="radio" data-stt="101" value="d" />    								<span>Phản xạ, hợp và tách</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-102" class="item-quest">
					<div class="quest-title">Câu 102 :</div>
					<div class="quest-content">
						<span>Điều gì sẽ xảy ra khi loại bỏ bản ghi gốc duy nhất trong một cây</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="203" data-idquest="203" type="radio" data-stt="102" value="a" />    								<span>Mâu thuẫn thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="203" data-idquest="203" type="radio" data-stt="102" value="b" />    								<span>Không toàn vẹn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="203" data-idquest="203" type="radio" data-stt="102" value="c" />    								<span>Dư thừa thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="203" data-idquest="203" type="radio" data-stt="102" value="d" />    								<span>Mất thông tin</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-103" class="item-quest">
					<div class="quest-title">Câu 103 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="355" data-idquest="355" type="radio" data-stt="103" value="a" />    								<span>A → BC và BC → Z ⇒ AC → Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="355" data-idquest="355" type="radio" data-stt="103" value="b" />    								<span>AC → B và B → Z ⇒ AC → Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="355" data-idquest="355" type="radio" data-stt="103" value="c" />    								<span>A → B và B → Z ⇒ AC → Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="355" data-idquest="355" type="radio" data-stt="103" value="d" />    								<span>A → B và BC → Z ⇒ AC → Z</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-104" class="item-quest">
					<div class="quest-title">Câu 104 :</div>
					<div class="quest-content">
						<span>Building có Address là thuộc tính phức hợp (Street, City, Zip) và có thuộc tính đa trị FacilityName. Mô hình quan hệ phù hợp cho mô tả trên là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1003" data-idquest="1003" type="radio" data-stt="104" value="a" />    								<span>BUILDING(BuildingID PK, Street, City, Zip, FacilityName)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1003" data-idquest="1003" type="radio" data-stt="104" value="b" />    								<span>BUILDING(BuildingID PK, Street, City, Zip); 
BUILDING_FACILITY(BuildingID FK→BUILDING, FacilityName, PK(BuildingID, FacilityName))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1003" data-idquest="1003" type="radio" data-stt="104" value="c" />    								<span>BUILDING(BuildingID PK, Address TEXT, FacilityName TEXT)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1003" data-idquest="1003" type="radio" data-stt="104" value="d" />    								<span>FACILITY(FacilityName PK); 
BUILDING(BuildingID PK, Street, City, Zip); 
HAS(BuildingID FK, FacilityName FK, PK(FacilityName))</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-105" class="item-quest">
					<div class="quest-title">Câu 105 :</div>
					<div class="quest-content">
						<span>Câu lệnh truy vấn nào sau đây dùng để xác định standard prices nhỏ nhất trong table product_v</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="526" data-idquest="526" type="radio" data-stt="105" value="a" />    								<span>select standard_price from min(product_v)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="526" data-idquest="526" type="radio" data-stt="105" value="b" />    								<span>select min(standard_price) from product_v</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="526" data-idquest="526" type="radio" data-stt="105" value="c" />    								<span>select standard_price from product_v where standard_price = min</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="526" data-idquest="526" type="radio" data-stt="105" value="d" />    								<span>select min(standard_price) from product_v where standard_price =</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-106" class="item-quest">
					<div class="quest-title">Câu 106 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về biện pháp an toàn dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="327" data-idquest="327" type="radio" data-stt="106" value="a" />    								<span>Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra hoặc từ ngoài vào</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="327" data-idquest="327" type="radio" data-stt="106" value="b" />    								<span>Người sử dụng có thể kiểm tra, kiểm soát các quyền truy nhập của họ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="327" data-idquest="327" type="radio" data-stt="106" value="c" />    								<span>Dễ dàng truy xuất, thao tác trên các cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="327" data-idquest="327" type="radio" data-stt="106" value="d" />    								<span>Thống nhất các tiêu chuẩn, thủ tục và các biện pháp bảo vệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-107" class="item-quest">
					<div class="quest-title">Câu 107 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về cách nhận biết quan hệ dạng chuẩn 3NF</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="392" data-idquest="392" type="radio" data-stt="107" value="a" />    								<span>Tập các thuộc tính không khóa khác rỗng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="392" data-idquest="392" type="radio" data-stt="107" value="b" />    								<span>Tập các thuộc tính khóa bằng rỗng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="392" data-idquest="392" type="radio" data-stt="107" value="c" />    								<span>Tồn tại phụ thuộc X → Y ∈ F⁺, Y ∉ X và X⁺ ≠ Ω</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="392" data-idquest="392" type="radio" data-stt="107" value="d" />    								<span>Không tồn tại phụ thuộc X → Y ∈ F⁺, Y ∉ X và X⁺ ≠ Ω</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-108" class="item-quest">
					<div class="quest-title">Câu 108 :</div>
					<div class="quest-content">
						<span>Tất cả các hàm sau đây được xây dựng sẳn trong SQL, ngoại trừ:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="719" data-idquest="719" type="radio" data-stt="108" value="a" />    								<span>TOTAL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="719" data-idquest="719" type="radio" data-stt="108" value="b" />    								<span>COUNT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="719" data-idquest="719" type="radio" data-stt="108" value="c" />    								<span>MIN</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="719" data-idquest="719" type="radio" data-stt="108" value="d" />    								<span>AVG</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-109" class="item-quest">
					<div class="quest-title">Câu 109 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→BC, B→D, CE→A}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="935" data-idquest="935" type="radio" data-stt="109" value="a" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="935" data-idquest="935" type="radio" data-stt="109" value="b" />    								<span>3NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="935" data-idquest="935" type="radio" data-stt="109" value="c" />    								<span>2NF (nhưng không phải 3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="935" data-idquest="935" type="radio" data-stt="109" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-110" class="item-quest">
					<div class="quest-title">Câu 110 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→B, B→C, A→C, AC→D}. Phụ thuộc hàm nào dư thừa?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1015" data-idquest="1015" type="radio" data-stt="110" value="a" />    								<span>B→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1015" data-idquest="1015" type="radio" data-stt="110" value="b" />    								<span>A→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1015" data-idquest="1015" type="radio" data-stt="110" value="c" />    								<span>AC→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1015" data-idquest="1015" type="radio" data-stt="110" value="d" />    								<span>A→C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-111" class="item-quest">
					<div class="quest-title">Câu 111 :</div>
					<div class="quest-content">
						<span>F = {A → B, C → X, BX → Z}, khi đó</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="237" data-idquest="237" type="radio" data-stt="111" value="a" />    								<span>AB → C ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="237" data-idquest="237" type="radio" data-stt="111" value="b" />    								<span>A → Z ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="237" data-idquest="237" type="radio" data-stt="111" value="c" />    								<span>X → Z ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="237" data-idquest="237" type="radio" data-stt="111" value="d" />    								<span>AC → Z ∈ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-112" class="item-quest">
					<div class="quest-title">Câu 112 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy SID của sinh viên có đăng ký cả hai học kỳ '2025_Spring' và '2025_Fall'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="943" data-idquest="943" type="radio" data-stt="112" value="a" />    								<span>﻿πSID(σSemester=′2025_Spring′(ENROLL))∩πSID(σSemester=′2025_Fall′(ENROLL))π_{SID}(σ_{Semester='2025\_Spring'}(ENROLL)) ∩ π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))πSID​(σSemester=′2025_Spring′​(ENROLL))∩πSID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="943" data-idquest="943" type="radio" data-stt="112" value="b" />    								<span>﻿πSID(σSemester=′2025_Spring′(ENROLL))∪πSID(σSemester=′2025_Fall′(ENROLL))π_{SID}(σ_{Semester='2025\_Spring'}(ENROLL)) ∪ π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))πSID​(σSemester=′2025_Spring′​(ENROLL))∪πSID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="943" data-idquest="943" type="radio" data-stt="112" value="c" />    								<span>﻿πSID(σSemester=′2025_Spring′∧Semester=′2025_Fall′(ENROLL))π_{SID}(σ_{Semester='2025\_Spring' ∧ Semester='2025\_Fall'}(ENROLL))πSID​(σSemester=′2025_Spring′∧Semester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="943" data-idquest="943" type="radio" data-stt="112" value="d" />    								<span>﻿πSID(ENROLL)−πSID(σSemester=′2025_Fall′(ENROLL))π_{SID}(ENROLL) − π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))πSID​(ENROLL)−πSID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-113" class="item-quest">
					<div class="quest-title">Câu 113 :</div>
					<div class="quest-content">
						<span>Mô hình CSDL phân cấp là mô hình</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="201" data-idquest="201" type="radio" data-stt="113" value="a" />    								<span>Dữ liệu được biểu diễn bằng mối quan hệ thực thể</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="201" data-idquest="201" type="radio" data-stt="113" value="b" />    								<span>Dữ liệu được biểu diễn bằng cấu trúc cây</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="201" data-idquest="201" type="radio" data-stt="113" value="c" />    								<span>Dữ liệu được biểu diễn bằng bảng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="201" data-idquest="201" type="radio" data-stt="113" value="d" />    								<span>Dữ liệu được biểu diễn bằng con trỏ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-114" class="item-quest">
					<div class="quest-title">Câu 114 :</div>
					<div class="quest-content">
						<span>F={A→BC, C→D, D→E}. ﻿A+A^+A+﻿ là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1155" data-idquest="1155" type="radio" data-stt="114" value="a" />    								<span>{A,B,C,D,E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1155" data-idquest="1155" type="radio" data-stt="114" value="b" />    								<span>{A,D,E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1155" data-idquest="1155" type="radio" data-stt="114" value="c" />    								<span>{A,B,C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1155" data-idquest="1155" type="radio" data-stt="114" value="d" />    								<span>{A,B,D}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-115" class="item-quest">
					<div class="quest-title">Câu 115 :</div>
					<div class="quest-content">
						<span>Let R(A,B,C,D), F = {AB→C, C→D}. What is (AB)+? ( Cho R(A,B,C,D), F = {AB→C, C→D}. Bao đóng (AB)+ là: )</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1090" data-idquest="1090" type="radio" data-stt="115" value="a" />    								<span>{A, B}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1090" data-idquest="1090" type="radio" data-stt="115" value="b" />    								<span>{A, B, C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1090" data-idquest="1090" type="radio" data-stt="115" value="c" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1090" data-idquest="1090" type="radio" data-stt="115" value="d" />    								<span>{A, C, D}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-116" class="item-quest">
					<div class="quest-title">Câu 116 :</div>
					<div class="quest-content">
						<span>Nếu NK->ME là một phụ thuộc hàm của lược đồ quan hệ H(N,K,M,E), thì:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="696" data-idquest="696" type="radio" data-stt="116" value="a" />    								<span>NK là khóa của H</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="696" data-idquest="696" type="radio" data-stt="116" value="b" />    								<span>Tất cả các câu đều đúng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="696" data-idquest="696" type="radio" data-stt="116" value="c" />    								<span>Không thể tồn tại 2 bộ trong H mà có cùng giá trị của N và K.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="696" data-idquest="696" type="radio" data-stt="116" value="d" />    								<span>NK là khóa chính của H.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-117" class="item-quest">
					<div class="quest-title">Câu 117 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Có rất nhiều cách nhìn dữ liệu ở mô hình ngoài, nhưng biểu diễn toàn bộ thông tin trong CSDL là duy nhất tại:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="419" data-idquest="419" type="radio" data-stt="117" value="a" />    								<span>Mô hình quan niệm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="419" data-idquest="419" type="radio" data-stt="117" value="b" />    								<span>Mô hình trong</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="419" data-idquest="419" type="radio" data-stt="117" value="c" />    								<span>Mô hình khái niệm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="419" data-idquest="419" type="radio" data-stt="117" value="d" />    								<span>Mô hình ngoài</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-118" class="item-quest">
					<div class="quest-title">Câu 118 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Nếu quan hệ là dạng chuẩn 1NF và không tồn tại các phụ thuộc hàm sao cho thuộc tính về vế trái là một tập con thực sự của khóa và thuộc tính về vế phải ..........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="453" data-idquest="453" type="radio" data-stt="118" value="a" />    								<span>Phụ thuộc hàm vào thuộc tính vế trái</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="453" data-idquest="453" type="radio" data-stt="118" value="b" />    								<span>Là thuộc tính dư thừa về trái</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="453" data-idquest="453" type="radio" data-stt="118" value="c" />    								<span>Phụ thuộc hàm vào thuộc tính không khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="453" data-idquest="453" type="radio" data-stt="118" value="d" />    								<span>Là thuộc tính không khóa của quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-119" class="item-quest">
					<div class="quest-title">Câu 119 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Người sử dụng được quyền ghi và đọc bao gồm các quyền như chèn, xóa và sửa đổi........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="482" data-idquest="482" type="radio" data-stt="119" value="a" />    								<span>GRANT ALL ON R TO GROUP/WORLD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="482" data-idquest="482" type="radio" data-stt="119" value="b" />    								<span>GRANT READ ON R TO GROUP/WORLD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="482" data-idquest="482" type="radio" data-stt="119" value="c" />    								<span>GRANT READ/WRITE ON R TO GROUP/WORLD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="482" data-idquest="482" type="radio" data-stt="119" value="d" />    								<span>GRANT SELECT ON R TO GROUP/WORLD</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-120" class="item-quest">
					<div class="quest-title">Câu 120 :</div>
					<div class="quest-content">
						<span>Given R(A,B,C,D,E), F = {A→BC, C→D, D→E}. Which FD set is equivalent to F? (Cho R(A,B,C,D,E), F = {A→BC, C→D, D→E}. Tập FD nào tương đương với F?)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1058" data-idquest="1058" type="radio" data-stt="120" value="a" />    								<span>{A→BC, C→DE}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1058" data-idquest="1058" type="radio" data-stt="120" value="b" />    								<span>{A→BC, C→D, E→A}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1058" data-idquest="1058" type="radio" data-stt="120" value="c" />    								<span>{A→B, B→C, C→D, D→E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1058" data-idquest="1058" type="radio" data-stt="120" value="d" />    								<span>{A→B, A→C, C→D, D→E}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-121" class="item-quest">
					<div class="quest-title">Câu 121 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn Dept='CS' có đăng ký trong '2025_Fall' nhưng không có đăng ký trong '2025_Spring'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="916" data-idquest="916" type="radio" data-stt="121" value="a" />    								<span>﻿πCID(σDept=′CS′(COURSE))−πCID(σSemester=′2025_Spring′(ENROLL))π_{CID}(σ_{Dept='CS'}(COURSE)) − π_{CID}(σ_{Semester='2025\_Spring'}(ENROLL))πCID​(σDept=′CS′​(COURSE))−πCID​(σSemester=′2025_Spring′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="916" data-idquest="916" type="radio" data-stt="121" value="b" />    								<span>﻿πCID(σDept=′CS′∧Semester=′2025_Fall′(COURSE⋈ENROLL))∩πCID(σDept=′CS′∧Semester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∧ Semester='2025\_Fall'}(COURSE ⋈ ENROLL)) ∩ π_{CID}(σ_{Dept='CS' ∧ Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∧Semester=′2025_Fall′​(COURSE⋈ENROLL))∩πCID​(σDept=′CS′∧Semester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="916" data-idquest="916" type="radio" data-stt="121" value="c" />    								<span>﻿πCID(σSemester=′2025_Fall′(ENROLL))−πCID(σDept=′CS′(COURSE))π_{CID}(σ_{Semester='2025\_Fall'}(ENROLL)) − π_{CID}(σ_{Dept='CS'}(COURSE))πCID​(σSemester=′2025_Fall′​(ENROLL))−πCID​(σDept=′CS′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="916" data-idquest="916" type="radio" data-stt="121" value="d" />    								<span>﻿πCID(σDept=′CS′∧Semester=′2025_Fall′(COURSE⋈ENROLL))−πCID(σDept=′CS′∧Semester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∧ Semester='2025\_Fall'}(COURSE ⋈ ENROLL)) − π_{CID}(σ_{Dept='CS' ∧ Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∧Semester=′2025_Fall′​(COURSE⋈ENROLL))−πCID​(σDept=′CS′∧Semester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-122" class="item-quest">
					<div class="quest-title">Câu 122 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
INSTRUCTOR(IID, IName, Dept): Chứa thông tin giảng viên
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ADVISE(SID, IID): Chứa thông tin cố vấn học tập, SID tham chiếu tới SID của STUDENTS, IID tham chiếu tới IID của INSTRUCTOR.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy Title của các môn được đăng ký bởi sinh viên được cố vấn bởi giảng viên có IID='I01'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="914" data-idquest="914" type="radio" data-stt="122" value="a" />    								<span>﻿πTitle(COURSE)−πTitle((σIID=′I01′(ADVISE))⋈ENROLL⋈COURSE)π_{Title}(COURSE) − π_{Title}((σ_{IID='I01'}(ADVISE)) ⋈ ENROLL ⋈ COURSE)πTitle​(COURSE)−πTitle​((σIID=′I01′​(ADVISE))⋈ENROLL⋈COURSE)﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="914" data-idquest="914" type="radio" data-stt="122" value="b" />    								<span>﻿πTitle((σIID=′I01′(ADVISE))⋈ENROLL⋈COURSE)π_{Title}((σ_{IID='I01'}(ADVISE)) ⋈ ENROLL ⋈ COURSE)πTitle​((σIID=′I01′​(ADVISE))⋈ENROLL⋈COURSE)﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="914" data-idquest="914" type="radio" data-stt="122" value="c" />    								<span>﻿πTitle(σIID=′I01′(COURSE⋈ENROLL))π_{Title}(σ_{IID='I01'}(COURSE ⋈ ENROLL))πTitle​(σIID=′I01′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="914" data-idquest="914" type="radio" data-stt="122" value="d" />    								<span>﻿πTitle(ADVISE⋈σIID=′I01′(ENROLL)⋈COURSE)π_{Title}(ADVISE ⋈ σ_{IID='I01'}(ENROLL) ⋈ COURSE)πTitle​(ADVISE⋈σIID=′I01′​(ENROLL)⋈COURSE)﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-123" class="item-quest">
					<div class="quest-title">Câu 123 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
PREREQ(CID, PreCID); Chứa thông tin môn tiên quyết. CID khác PreCID, đều tham chiếu tới CID của COURSE.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn có ít nhất một đăng ký và không phải là môn tiên quyết của bất kỳ môn nào (tức không xuất hiện ở PreCID).</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1010" data-idquest="1010" type="radio" data-stt="123" value="a" />    								<span>﻿πCID(ENROLL)∪ρCID(πPreCID(PREREQ))π_{CID}(ENROLL) ∪ ρ_{CID}(π_{PreCID}(PREREQ))πCID​(ENROLL)∪ρCID​(πPreCID​(PREREQ))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1010" data-idquest="1010" type="radio" data-stt="123" value="b" />    								<span>﻿πCID(ENROLL)∩ρCID(πPreCID(PREREQ))π_{CID}(ENROLL) ∩ ρ_{CID}(π_{PreCID}(PREREQ))πCID​(ENROLL)∩ρCID​(πPreCID​(PREREQ))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1010" data-idquest="1010" type="radio" data-stt="123" value="c" />    								<span>﻿πCID(ENROLL)−ρCID(πPreCID(PREREQ))π_{CID}(ENROLL) − ρ_{CID}(π_{PreCID}(PREREQ))πCID​(ENROLL)−ρCID​(πPreCID​(PREREQ))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1010" data-idquest="1010" type="radio" data-stt="123" value="d" />    								<span>﻿πCID(ENROLL)−πPreCID(PREREQ)π_{CID}(ENROLL) − π_{PreCID}(PREREQ)πCID​(ENROLL)−πPreCID​(PREREQ)﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-124" class="item-quest">
					<div class="quest-title">Câu 124 :</div>
					<div class="quest-content">
						<span>Nếu lược đồ R(A,B,C), có phụ thuộc hàm A->B và B->C. Thuộc tính nào mang ý nghĩa quyết định?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="694" data-idquest="694" type="radio" data-stt="124" value="a" />    								<span>B, C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="694" data-idquest="694" type="radio" data-stt="124" value="b" />    								<span>A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="694" data-idquest="694" type="radio" data-stt="124" value="c" />    								<span>A, B, C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="694" data-idquest="694" type="radio" data-stt="124" value="d" />    								<span>A, B</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-125" class="item-quest">
					<div class="quest-title">Câu 125 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="332" data-idquest="332" type="radio" data-stt="125" value="a" />    								<span>Mục tiêu của các hệ CSDL là: tính bất biến của các hệ ứng dụng đối với sự thay đổi trong cấu trúc lưu trữ và chiến lược truy nhập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="332" data-idquest="332" type="radio" data-stt="125" value="b" />    								<span>Dữ liệu được biểu diễn, mô tả nhiều cách khác nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="332" data-idquest="332" type="radio" data-stt="125" value="c" />    								<span>Cấu trúc lưu trữ và các hệ chương trình ứng dụng trên độc lập với nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="332" data-idquest="332" type="radio" data-stt="125" value="d" />    								<span>Người sử dụng khi thao tác trên các cơ sở dữ liệu có thể làm thay đổi cấu trúc lưu trữ dữ liệu và chiến lược truy nhập cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-126" class="item-quest">
					<div class="quest-title">Câu 126 :</div>
					<div class="quest-content">
						<span>Let R(A,B,C), F = {A→B}. The candidate key of R is: ( Cho R(A,B,C), F = {A→B}. Khóa ứng viên của R là: )</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1074" data-idquest="1074" type="radio" data-stt="126" value="a" />    								<span>AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1074" data-idquest="1074" type="radio" data-stt="126" value="b" />    								<span>A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1074" data-idquest="1074" type="radio" data-stt="126" value="c" />    								<span>BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1074" data-idquest="1074" type="radio" data-stt="126" value="d" />    								<span>AB</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-127" class="item-quest">
					<div class="quest-title">Câu 127 :</div>
					<div class="quest-content">
						<span>Một lược đồ quan hệ đạt BCNF thì sẽ đạt chuẩn:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="662" data-idquest="662" type="radio" data-stt="127" value="a" />    								<span>Lựa chọn khác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="662" data-idquest="662" type="radio" data-stt="127" value="b" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="662" data-idquest="662" type="radio" data-stt="127" value="c" />    								<span>Dạng chuẩn Boyce-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="662" data-idquest="662" type="radio" data-stt="127" value="d" />    								<span>Cả 2 phương án: 1 và 2</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-128" class="item-quest">
					<div class="quest-title">Câu 128 :</div>
					<div class="quest-content">
						<span>Một số mô hình dữ liệu sử dụng cho hệ thống cơ sở dữ liệu là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="689" data-idquest="689" type="radio" data-stt="128" value="a" />    								<span>Mô hình dữ liệu mạng, phân cấp, hướng đối tượng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="689" data-idquest="689" type="radio" data-stt="128" value="b" />    								<span>Mô hình dữ liệu quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="689" data-idquest="689" type="radio" data-stt="128" value="c" />    								<span>Mô hình E-R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="689" data-idquest="689" type="radio" data-stt="128" value="d" />    								<span>Tất cả các phương án trên.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-129" class="item-quest">
					<div class="quest-title">Câu 129 :</div>
					<div class="quest-content">
						<span>Cho các phụ thuộc hàm (H I -> D, D -> P) của lược đồ quan hệ N(H I D P), phụ thuộc hàm H -> P có thể được suy ra nhờ vào:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="560" data-idquest="560" type="radio" data-stt="129" value="a" />    								<span>Luật thêm vào</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="560" data-idquest="560" type="radio" data-stt="129" value="b" />    								<span>Luật bắc cầu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="560" data-idquest="560" type="radio" data-stt="129" value="c" />    								<span>Luật phản xạ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="560" data-idquest="560" type="radio" data-stt="129" value="d" />    								<span>Tất cả điều sai.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-130" class="item-quest">
					<div class="quest-title">Câu 130 :</div>
					<div class="quest-content">
						<span>Gỉa sử bảng Employee có n dòng dữ liệu (n>1). Hãy cho biết kết quả lệnh truy vấn sau có bao nhiêu dòng? SELECT e1.name, e2.name FROM employee e1, employee e2</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="617" data-idquest="617" type="radio" data-stt="130" value="a" />    								<span>>n</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="617" data-idquest="617" type="radio" data-stt="130" value="b" />    								<span>0</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="617" data-idquest="617" type="radio" data-stt="130" value="c" />    								<span>n</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="617" data-idquest="617" type="radio" data-stt="130" value="d" />    								<span>< n</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-131" class="item-quest">
					<div class="quest-title">Câu 131 :</div>
					<div class="quest-content">
						<span>Một quan hệ dạng chuẩn 1NF có thể chuyển đổi về nhóm các quan hệ 3NF bằng cách</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="274" data-idquest="274" type="radio" data-stt="131" value="a" />    								<span>Loại bỏ các phụ thuộc không đầy đủ vào khóa và bắc cầu vào khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="274" data-idquest="274" type="radio" data-stt="131" value="b" />    								<span>Loại bỏ các phụ thuộc bắc cầu vào khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="274" data-idquest="274" type="radio" data-stt="131" value="c" />    								<span>Loại bỏ các phụ thuộc không đầy đủ vào khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="274" data-idquest="274" type="radio" data-stt="131" value="d" />    								<span>Loại bỏ các phụ thuộc đầy đủ vào khóa và bắc cầu vào khóa</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-132" class="item-quest">
					<div class="quest-title">Câu 132 :</div>
					<div class="quest-content">
						<span>Trong mô hình ER, ràng buộc toàn bộ của thực thể X vào quan hệ 1–N với thực thể Y có nghĩa là gì?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1117" data-idquest="1117" type="radio" data-stt="132" value="a" />    								<span>Mọi thể hiện của Y đều phải tham gia vào quan hệ với X</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1117" data-idquest="1117" type="radio" data-stt="132" value="b" />    								<span>Mỗi thể hiện của X chỉ được tham gia tối đa một lần với Y</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1117" data-idquest="1117" type="radio" data-stt="132" value="c" />    								<span>Mọi thể hiện của X phải tham gia ít nhất một lần vào quan hệ với Y</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1117" data-idquest="1117" type="radio" data-stt="132" value="d" />    								<span>Không có thể hiện nào của X được tham gia vào quan hệ với Y</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-133" class="item-quest">
					<div class="quest-title">Câu 133 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn không thuộc Dept='CS' nhưng có ít nhất một đăng ký trong Semester='2025_Spring'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="893" data-idquest="893" type="radio" data-stt="133" value="a" />    								<span>﻿πCID(σSemester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σSemester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="893" data-idquest="893" type="radio" data-stt="133" value="b" />    								<span>﻿πCID(σDept<>′CS′∧Semester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Dept<>'CS' ∧ Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σDept<>′CS′∧Semester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="893" data-idquest="893" type="radio" data-stt="133" value="c" />    								<span>﻿πCID(σDept=′CS′∧Semester=′2025_Spring′(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∧ Semester='2025\_Spring'}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∧Semester=′2025_Spring′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="893" data-idquest="893" type="radio" data-stt="133" value="d" />    								<span>﻿πCID(σDept<>′CS′(COURSE))∪πCID(σSemester=′2025_Spring′(ENROLL))π_{CID}(σ_{Dept<>'CS'}(COURSE)) ∪ π_{CID}(σ_{Semester='2025\_Spring'}(ENROLL))πCID​(σDept<>′CS′​(COURSE))∪πCID​(σSemester=′2025_Spring′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-134" class="item-quest">
					<div class="quest-title">Câu 134 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, A→C, C→D, D→E}. Phụ thuộc hàm nào dư thừa?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="993" data-idquest="993" type="radio" data-stt="134" value="a" />    								<span>C→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="993" data-idquest="993" type="radio" data-stt="134" value="b" />    								<span>A→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="993" data-idquest="993" type="radio" data-stt="134" value="c" />    								<span>AB→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="993" data-idquest="993" type="radio" data-stt="134" value="d" />    								<span>D→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-135" class="item-quest">
					<div class="quest-title">Câu 135 :</div>
					<div class="quest-content">
						<span>Trong mô hình ERD, thực thể yếu (weak entity) được xác định bởi:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1208" data-idquest="1208" type="radio" data-stt="135" value="a" />    								<span>Không có thuộc tính khóa riêng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1208" data-idquest="1208" type="radio" data-stt="135" value="b" />    								<span>Có thuộc tính đa trị</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1208" data-idquest="1208" type="radio" data-stt="135" value="c" />    								<span>Có thuộc tính khóa riêng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1208" data-idquest="1208" type="radio" data-stt="135" value="d" />    								<span>Chỉ có quan hệ 1–1</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-136" class="item-quest">
					<div class="quest-title">Câu 136 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(Emp#,Dept#,City) và khóa K(Emp#,Dept#), tập phụ thuộc hàm F: F = {Emp# -> City, Emp# -> Dept#, Dept# -> City, Emp#,Dept# -> City}, Tập phụ thuộc hàm nào sau đây là phủ tối thiểu của F?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="594" data-idquest="594" type="radio" data-stt="136" value="a" />    								<span>{Emp# -> City, Emp# -> Dept#}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="594" data-idquest="594" type="radio" data-stt="136" value="b" />    								<span>{Emp# -> City, Dept# -> City}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="594" data-idquest="594" type="radio" data-stt="136" value="c" />    								<span>{Emp#, Dept# -> City, Emp# -> Dept}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="594" data-idquest="594" type="radio" data-stt="136" value="d" />    								<span>{Emp# -> Dept#, Dept# -> City}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-137" class="item-quest">
					<div class="quest-title">Câu 137 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R(A,B,C,D), F={A→B, B→C, C→D}. Dạng chuẩn cao nhất mà quan hệ đáp ứng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1123" data-idquest="1123" type="radio" data-stt="137" value="a" />    								<span>3NF (không BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1123" data-idquest="1123" type="radio" data-stt="137" value="b" />    								<span>1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1123" data-idquest="1123" type="radio" data-stt="137" value="c" />    								<span>2NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1123" data-idquest="1123" type="radio" data-stt="137" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-138" class="item-quest">
					<div class="quest-title">Câu 138 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Có nhiều kỹ thuật tối ưu hoá các câu hỏi, trong đó có kỹ thuật phân rã câu hỏi dựa trên.........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="471" data-idquest="471" type="radio" data-stt="138" value="a" />    								<span>Suy dẫn logic từ các tiên đề Armstrong</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="471" data-idquest="471" type="radio" data-stt="138" value="b" />    								<span>Ngôn ngữ dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="471" data-idquest="471" type="radio" data-stt="138" value="c" />    								<span>Biểu thức đại số quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="471" data-idquest="471" type="radio" data-stt="138" value="d" />    								<span>Ngôn ngữ của đại số quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-139" class="item-quest">
					<div class="quest-title">Câu 139 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E,F), F = {A→BC, C→D, E→F}. Phụ thuộc hàm nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="898" data-idquest="898" type="radio" data-stt="139" value="a" />    								<span>D→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="898" data-idquest="898" type="radio" data-stt="139" value="b" />    								<span>A→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="898" data-idquest="898" type="radio" data-stt="139" value="c" />    								<span>A→F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="898" data-idquest="898" type="radio" data-stt="139" value="d" />    								<span>C→B</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-140" class="item-quest">
					<div class="quest-title">Câu 140 :</div>
					<div class="quest-content">
						<span>R(A,B,C,D,E), F={A→B, B→C, C→D, AD→E}. FD nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="871" data-idquest="871" type="radio" data-stt="140" value="a" />    								<span>D→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="871" data-idquest="871" type="radio" data-stt="140" value="b" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="871" data-idquest="871" type="radio" data-stt="140" value="c" />    								<span>B→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="871" data-idquest="871" type="radio" data-stt="140" value="d" />    								<span>C→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-141" class="item-quest">
					<div class="quest-title">Câu 141 :</div>
					<div class="quest-content">
						<span>Điều kiện nào sau đây trong một quan hệ luôn luôn đạt dạng chuẩn 2 (2NF)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="614" data-idquest="614" type="radio" data-stt="141" value="a" />    								<span>Nếu tất cả các khóa của quan hệ này chỉ gồm một thuộc tính.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="614" data-idquest="614" type="radio" data-stt="141" value="b" />    								<span>Nếu có phụ thuộc bắc cầu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="614" data-idquest="614" type="radio" data-stt="141" value="c" />    								<span>Nếu tất cả các phụ thuộc hàm là riêng phần.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="614" data-idquest="614" type="radio" data-stt="141" value="d" />    								<span>Nếu chỉ có một khóa.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-142" class="item-quest">
					<div class="quest-title">Câu 142 :</div>
					<div class="quest-content">
						<span>Let R(A,B,C,D,E), F = {BD→A, A→C, C→E, E→B}. What is (BD)+? (Cho R(A,B,C,D,E), F = {BD→A, A→C, C→E, E→B}. Bao đóng (BD)+ là:)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1060" data-idquest="1060" type="radio" data-stt="142" value="a" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1060" data-idquest="1060" type="radio" data-stt="142" value="b" />    								<span>{A, B, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1060" data-idquest="1060" type="radio" data-stt="142" value="c" />    								<span>{B, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1060" data-idquest="1060" type="radio" data-stt="142" value="d" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-143" class="item-quest">
					<div class="quest-title">Câu 143 :</div>
					<div class="quest-content">
						<span>Cho lược đồ Cơ sở dữ liệu sau: SINHVIEN(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop) LOP(MaLop, TenLop, MaKhoa, GVCN) KETQUA(MaSV, MaMH, LanThi, Diem) MONHOC(MaMH, TenMH, SoTinChi) Liệt kê danh sách các sinh viên gồm (MaSV, HoSV, TenSV) có điểm thi môn CSDL cao nhất?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="508" data-idquest="508" type="radio" data-stt="143" value="a" />    								<span>Select top 1 with ties K.MaSV, HoSV, TenSV From SinhVien S, KetQua K Where S.MASV=K.MASV And MaMH='CSDL' order by diem desc</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="508" data-idquest="508" type="radio" data-stt="143" value="b" />    								<span>Tất cả các phương án trên.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="508" data-idquest="508" type="radio" data-stt="143" value="c" />    								<span>Select K.MaSV, HoSV, TenSV From SinhVien S, ketqua K Where S.MASV=K.MASV And MaMH='CSDL' And Diem= (Select max(Diem)From ketqua where MaMH ='CSDL')</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="508" data-idquest="508" type="radio" data-stt="143" value="d" />    								<span>Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K Where S.MASV=K.MASV And MaMH='CSDL' And Diem>=ALL (Select Diem From KetQua where MaMH ='CSDL')</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-144" class="item-quest">
					<div class="quest-title">Câu 144 :</div>
					<div class="quest-content">
						<span>Cơ sở để chuẩn hóa dựa trên các khái niệm</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="263" data-idquest="263" type="radio" data-stt="144" value="a" />    								<span>Khóa và siêu khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="263" data-idquest="263" type="radio" data-stt="144" value="b" />    								<span>Các thuộc tính, bao đóng các thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="263" data-idquest="263" type="radio" data-stt="144" value="c" />    								<span>Bao đóng các phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="263" data-idquest="263" type="radio" data-stt="144" value="d" />    								<span>Phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-145" class="item-quest">
					<div class="quest-title">Câu 145 :</div>
					<div class="quest-content">
						<span>Câu lệnh nào không thuộc loại ngôn ngữ định nghĩa dữ liệu (DDL)?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="849" data-idquest="849" type="radio" data-stt="145" value="a" />    								<span>TRUNCATE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="849" data-idquest="849" type="radio" data-stt="145" value="b" />    								<span>CREATE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="849" data-idquest="849" type="radio" data-stt="145" value="c" />    								<span>UPDATE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="849" data-idquest="849" type="radio" data-stt="145" value="d" />    								<span>ALTER</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-146" class="item-quest">
					<div class="quest-title">Câu 146 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R(A,B,C), F={A→B, B→C}. Quan hệ vi phạm dạng chuẩn nào?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1126" data-idquest="1126" type="radio" data-stt="146" value="a" />    								<span>Không vi phạm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1126" data-idquest="1126" type="radio" data-stt="146" value="b" />    								<span>3NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1126" data-idquest="1126" type="radio" data-stt="146" value="c" />    								<span>2NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1126" data-idquest="1126" type="radio" data-stt="146" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-147" class="item-quest">
					<div class="quest-title">Câu 147 :</div>
					<div class="quest-content">
						<span>F={AB→C, C→D, D→A}. Khóa của R(A,B,C,D)?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1145" data-idquest="1145" type="radio" data-stt="147" value="a" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1145" data-idquest="1145" type="radio" data-stt="147" value="b" />    								<span>AD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1145" data-idquest="1145" type="radio" data-stt="147" value="c" />    								<span>D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1145" data-idquest="1145" type="radio" data-stt="147" value="d" />    								<span>AC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-148" class="item-quest">
					<div class="quest-title">Câu 148 :</div>
					<div class="quest-content">
						<span>Một kịch bản quản lý hệ thống bán hàng gồm các ràng buộc sau: Mỗi nhân viên làm việc tại một cửa hàng. Mỗi cửa hàng có nhiều nhân viên làm việc. Mỗi nhân viên phụ trách bán nhiều sản phẩm, mỗi sản phẩm được bán bởi nhiều nhân viên. Các nhân viên quản lý lẫn nhau. Phát biểu nào sau đây là đúng nhất với kịch bản trên?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="904" data-idquest="904" type="radio" data-stt="148" value="a" />    								<span>ERD có 3 tập thực thể, 2 liên kết M–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="904" data-idquest="904" type="radio" data-stt="148" value="b" />    								<span>ERD có 3 tập thực thể, 2 liên kết M–N, 1 liên kết 1-N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="904" data-idquest="904" type="radio" data-stt="148" value="c" />    								<span>ERD có 3 tập thực thể, 1 liên kết M–N, 2 liên kết 1-N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="904" data-idquest="904" type="radio" data-stt="148" value="d" />    								<span>ERD có 4 tập thực thể, 2 liên kết M–N, 2 liên kết 1-N</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-149" class="item-quest">
					<div class="quest-title">Câu 149 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Cấu trúc dữ liệu trong mô hình CSDL mạng quá phức tạp vì .......... Vì vậy việc thiết kế và cài đặt cơ sở dữ liệu mạng thường rất khó khăn.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="430" data-idquest="430" type="radio" data-stt="149" value="a" />    								<span>Quá nhiều liên kết giữa các xuất hiện dữ liệu bằng các xuất hiện liên kết</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="430" data-idquest="430" type="radio" data-stt="149" value="b" />    								<span>Mô hình dữ liệu mạng chứa một thực thể</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="430" data-idquest="430" type="radio" data-stt="149" value="c" />    								<span>Mô hình dữ liệu mạng chứa nhiều thực thể</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="430" data-idquest="430" type="radio" data-stt="149" value="d" />    								<span>Mối liên kết giữa các thực thể biểu diễn không tường minh</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-150" class="item-quest">
					<div class="quest-title">Câu 150 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D), F = {A→B, C→D}. Bao đóng của tập thuộc tính {A,C} là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1111" data-idquest="1111" type="radio" data-stt="150" value="a" />    								<span>{A, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1111" data-idquest="1111" type="radio" data-stt="150" value="b" />    								<span>{A, C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1111" data-idquest="1111" type="radio" data-stt="150" value="c" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1111" data-idquest="1111" type="radio" data-stt="150" value="d" />    								<span>{A, B, C}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-151" class="item-quest">
					<div class="quest-title">Câu 151 :</div>
					<div class="quest-content">
						<span>Các phép toán trong tổ hợp SELECT - FROM - WHERE</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="400" data-idquest="400" type="radio" data-stt="151" value="a" />    								<span>Kết nối các quan hệ sau mệnh đề FROM, chiếu các thuộc tính sau SELECT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="400" data-idquest="400" type="radio" data-stt="151" value="b" />    								<span>Kết nối tự nhiên các quan hệ sau mệnh đề SELECT, thỏa mãn biểu thức logic sau WHERE và chiếu trên các thuộc tính sau mệnh đề FROM</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="400" data-idquest="400" type="radio" data-stt="151" value="c" />    								<span>Tích các quan hệ trong mệnh đề FROM, chọn theo biểu thức sau WHERE và chiếu trên các thuộc tính sau mệnh đề SELECT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="400" data-idquest="400" type="radio" data-stt="151" value="d" />    								<span>Tích các quan hệ trong mệnh đề FROM, chiếu trong WHERE và chọn trên các thuộc tính sau mệnh đề SELECT</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-152" class="item-quest">
					<div class="quest-title">Câu 152 :</div>
					<div class="quest-content">
						<span>Thuộc tính dẫn xuất: Age của PERSON tính từ BirthDate. Khi ánh xạ, cách đúng là gì?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="933" data-idquest="933" type="radio" data-stt="152" value="a" />    								<span>Lưu Age và BirthDate; đồng bộ bằng trigger là bắt buộc trong mô hình quan hệ.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="933" data-idquest="933" type="radio" data-stt="152" value="b" />    								<span>Lưu Age trực tiếp trong PERSON để truy vấn nhanh.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="933" data-idquest="933" type="radio" data-stt="152" value="c" />    								<span>Không lưu Age; chỉ lưu BirthDate và tính Age khi cần.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="933" data-idquest="933" type="radio" data-stt="152" value="d" />    								<span>Tạo bảng AGE(PID PK, Age).</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-153" class="item-quest">
					<div class="quest-title">Câu 153 :</div>
					<div class="quest-content">
						<span>Thứ tự đúng trong câu lệnh SELECT</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="296" data-idquest="296" type="radio" data-stt="153" value="a" />    								<span>SELECT, FROM, GROUP BY, HAVING, ORDER BY</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="296" data-idquest="296" type="radio" data-stt="153" value="b" />    								<span>SELECT, FROM, GROUP BY, HAVING, ORDER BY</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="296" data-idquest="296" type="radio" data-stt="153" value="c" />    								<span>SELECT, FROM, GROUP BY, HAVING, WHERE, ORDER BY</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="296" data-idquest="296" type="radio" data-stt="153" value="d" />    								<span>SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-154" class="item-quest">
					<div class="quest-title">Câu 154 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="486" data-idquest="486" type="radio" data-stt="154" value="a" />    								<span>Nếu F = {A → B, B → C, A → D, B → D} khi đó A → C ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="486" data-idquest="486" type="radio" data-stt="154" value="b" />    								<span>Nếu F = {A → B, B → C, A → D, B → D} khi đó D → A ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="486" data-idquest="486" type="radio" data-stt="154" value="c" />    								<span>Nếu F = {A → B, B → C, A → D, B → D} khi đó C → A ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="486" data-idquest="486" type="radio" data-stt="154" value="d" />    								<span>Nếu F = {A → B, B → C, A → D, B → D} khi đó C → D ∈ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-155" class="item-quest">
					<div class="quest-title">Câu 155 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Tổ chức dữ liệu theo mô hình nào là tốt nhất phụ thuộc vào yêu cầu......... thông tin của tổ chức quản lý nó.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="424" data-idquest="424" type="radio" data-stt="155" value="a" />    								<span>Tìm kiếm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="424" data-idquest="424" type="radio" data-stt="155" value="b" />    								<span>Truy xuất và khai thác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="424" data-idquest="424" type="radio" data-stt="155" value="c" />    								<span>Truy vấn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="424" data-idquest="424" type="radio" data-stt="155" value="d" />    								<span>Cập nhật, bổ sung, sửa đổi</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-156" class="item-quest">
					<div class="quest-title">Câu 156 :</div>
					<div class="quest-content">
						<span>Biểu thức nào sau đây là biểu thức quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="293" data-idquest="293" type="radio" data-stt="156" value="a" />    								<span>π(σDAI > 100(R₁))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="293" data-idquest="293" type="radio" data-stt="156" value="b" />    								<span>πT#, TC(σDAI > 100(R₁))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="293" data-idquest="293" type="radio" data-stt="156" value="c" />    								<span>πT#, TC(σDAI > 100)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="293" data-idquest="293" type="radio" data-stt="156" value="d" />    								<span>πT#, TC(σ(R₁))</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-157" class="item-quest">
					<div class="quest-title">Câu 157 :</div>
					<div class="quest-content">
						<span>F = {A → B, B → C, BC → D, DA → B}, chọn một khẳng định đúng sau</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="489" data-idquest="489" type="radio" data-stt="157" value="a" />    								<span>A⁺ = ABCD và A → AD ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="489" data-idquest="489" type="radio" data-stt="157" value="b" />    								<span>A → AD ∈ F⁺ và C → D ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="489" data-idquest="489" type="radio" data-stt="157" value="c" />    								<span>A → D ∈ F⁺ và B → A ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="489" data-idquest="489" type="radio" data-stt="157" value="d" />    								<span>A → AD ∈ F⁺ và A → D ∈ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-158" class="item-quest">
					<div class="quest-title">Câu 158 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="333" data-idquest="333" type="radio" data-stt="158" value="a" />    								<span>Các ràng buộc là tập các quy tắc, quy định biểu diễn dữ liệu trong cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="333" data-idquest="333" type="radio" data-stt="158" value="b" />    								<span>Giữa các thực thể dữ liệu tồn tại các mối quan hệ, ràng buộc lẫn nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="333" data-idquest="333" type="radio" data-stt="158" value="c" />    								<span>Ràng buộc dữ liệu bảo đảm tính độc lập</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="333" data-idquest="333" type="radio" data-stt="158" value="d" />    								<span>Ràng buộc dữ liệu là các khái niệm về phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-159" class="item-quest">
					<div class="quest-title">Câu 159 :</div>
					<div class="quest-content">
						<span>Ngôn ngữ định nghĩa dữ liệu - DDL (Data Definition Language)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="303" data-idquest="303" type="radio" data-stt="159" value="a" />    								<span>Được đặc tả bằng một phần của hệ quản trị cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="303" data-idquest="303" type="radio" data-stt="159" value="b" />    								<span>Được đặc tả bằng các chương trình ứng dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="303" data-idquest="303" type="radio" data-stt="159" value="c" />    								<span>Được đặc tả bằng một ngôn ngữ dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="303" data-idquest="303" type="radio" data-stt="159" value="d" />    								<span>Được đặc tả bằng một ngôn ngữ, một phần của hệ quản trị cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-160" class="item-quest">
					<div class="quest-title">Câu 160 :</div>
					<div class="quest-content">
						<span>Người sử dụng có thể truy nhập</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="182" data-idquest="182" type="radio" data-stt="160" value="a" />    								<span>Phụ thuộc vào quyền truy nhập</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="182" data-idquest="182" type="radio" data-stt="160" value="b" />    								<span>Một phần cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="182" data-idquest="182" type="radio" data-stt="160" value="c" />    								<span>Hạn chế</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="182" data-idquest="182" type="radio" data-stt="160" value="d" />    								<span>Toàn bộ cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-161" class="item-quest">
					<div class="quest-title">Câu 161 :</div>
					<div class="quest-content">
						<span>Biểu diễn dữ liệu trong mô hình CSDL mạng</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="209" data-idquest="209" type="radio" data-stt="161" value="a" />    								<span>Bằng các bảng 2 chiều</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="209" data-idquest="209" type="radio" data-stt="161" value="b" />    								<span>Các mối nối liên kết giữa các bản ghi, tạo thành một đồ thị có hướng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="209" data-idquest="209" type="radio" data-stt="161" value="c" />    								<span>Bằng các ký hiệu biểu diễn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="209" data-idquest="209" type="radio" data-stt="161" value="d" />    								<span>Các mối nối liên kết giữa các bản ghi theo cấu trúc cây</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-162" class="item-quest">
					<div class="quest-title">Câu 162 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về các phụ thuộc hàm phản xạ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="351" data-idquest="351" type="radio" data-stt="162" value="a" />    								<span>Phụ thuộc mà vế trái được chứa trong vế phải</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="351" data-idquest="351" type="radio" data-stt="162" value="b" />    								<span>Với mọi B ⊂ A ⇒ A → B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="351" data-idquest="351" type="radio" data-stt="162" value="c" />    								<span>Phụ thuộc mà vế phải được chứa trong vế trái</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="351" data-idquest="351" type="radio" data-stt="162" value="d" />    								<span>Phụ thuộc vào Ω, không phụ thuộc vào F</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-163" class="item-quest">
					<div class="quest-title">Câu 163 :</div>
					<div class="quest-content">
						<span>Nguyên tắc chỉ đạo trong việc chuẩn hoá CSDL:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="700" data-idquest="700" type="radio" data-stt="163" value="a" />    								<span>Giảm thiểu sự bất thường khi thêm hoặc xoá dữ liệu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="700" data-idquest="700" type="radio" data-stt="163" value="b" />    								<span>Giảm thiểu dư thừa dữ liệu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="700" data-idquest="700" type="radio" data-stt="163" value="c" />    								<span>Giảm thiểu sự bất thường khi cập nhật dữ liệu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="700" data-idquest="700" type="radio" data-stt="163" value="d" />    								<span>Tất cả điều đúng.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-164" class="item-quest">
					<div class="quest-title">Câu 164 :</div>
					<div class="quest-content">
						<span>Với quan hệ E, mệnh đề tương đương nào đúng? σ_{age>30}(σ_{dept='IT'}(E)) = ?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1185" data-idquest="1185" type="radio" data-stt="164" value="a" />    								<span>π_{age,dept}(E)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1185" data-idquest="1185" type="radio" data-stt="164" value="b" />    								<span>σ_{age>30}(E) × σ_{dept='IT'}(E)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1185" data-idquest="1185" type="radio" data-stt="164" value="c" />    								<span>σ_{age>30}(E) ∪ σ_{dept='IT'}(E)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1185" data-idquest="1185" type="radio" data-stt="164" value="d" />    								<span>σ_{age>30 ∧ dept='IT'}(E)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-165" class="item-quest">
					<div class="quest-title">Câu 165 :</div>
					<div class="quest-content">
						<span>Các yếu tố liên quan đến thuộc tính của đối tượng là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="520" data-idquest="520" type="radio" data-stt="165" value="a" />    								<span>Tất cả các phương án trên.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="520" data-idquest="520" type="radio" data-stt="165" value="b" />    								<span>Miền giá trị của thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="520" data-idquest="520" type="radio" data-stt="165" value="c" />    								<span>Tên gọi của thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="520" data-idquest="520" type="radio" data-stt="165" value="d" />    								<span>Kiểu dữ liệu của thuộc tính</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-166" class="item-quest">
					<div class="quest-title">Câu 166 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→B, B→A, AC→D, D→E}. Phụ thuộc hàm nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="922" data-idquest="922" type="radio" data-stt="166" value="a" />    								<span>C→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="922" data-idquest="922" type="radio" data-stt="166" value="b" />    								<span>B→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="922" data-idquest="922" type="radio" data-stt="166" value="c" />    								<span>BC→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="922" data-idquest="922" type="radio" data-stt="166" value="d" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-167" class="item-quest">
					<div class="quest-title">Câu 167 :</div>
					<div class="quest-content">
						<span>Trong CSDL mạng, khi thực hiện các phép sửa đổi nội dung dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="212" data-idquest="212" type="radio" data-stt="167" value="a" />    								<span>Đảm bảo tính toàn vẹn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="212" data-idquest="212" type="radio" data-stt="167" value="b" />    								<span>Không dư thừa thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="212" data-idquest="212" type="radio" data-stt="167" value="c" />    								<span>Không làm xuất hiện mâu thuẫn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="212" data-idquest="212" type="radio" data-stt="167" value="d" />    								<span>Làm xuất hiện mâu thuẫn dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-168" class="item-quest">
					<div class="quest-title">Câu 168 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy Title của các môn có ít nhất một bản ghi đăng ký với Grade='A' hoặc Grade='B'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="890" data-idquest="890" type="radio" data-stt="168" value="a" />    								<span>﻿πTitle(σGrade=′A′∧Grade=′B′(COURSE⋈ENROLL))π_{Title}(σ_{Grade='A' ∧ Grade='B'}(COURSE ⋈ ENROLL))πTitle​(σGrade=′A′∧Grade=′B′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="890" data-idquest="890" type="radio" data-stt="168" value="b" />    								<span>﻿πTitle(COURSE)−πTitle(σGrade=′A′∨Grade=′B′(ENROLL))π_{Title}(COURSE) − π_{Title}(σ_{Grade='A' ∨ Grade='B'}(ENROLL))πTitle​(COURSE)−πTitle​(σGrade=′A′∨Grade=′B′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="890" data-idquest="890" type="radio" data-stt="168" value="c" />    								<span>﻿πTitle(σGrade=′A′∨Grade=′B′(COURSE⋈ENROLL))π_{Title}(σ_{Grade='A' ∨ Grade='B'}(COURSE ⋈ ENROLL))πTitle​(σGrade=′A′∨Grade=′B′​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="890" data-idquest="890" type="radio" data-stt="168" value="d" />    								<span>﻿σGrade=′A′∨Grade=′B′(πTitle(COURSE⋈ENROLL))σ_{Grade='A' ∨ Grade='B'}(π_{Title}(COURSE ⋈ ENROLL))σGrade=′A′∨Grade=′B′​(πTitle​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-169" class="item-quest">
					<div class="quest-title">Câu 169 :</div>
					<div class="quest-content">
						<span>Mô hình thực thể liên kết cho phép mô tả:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="779" data-idquest="779" type="radio" data-stt="169" value="a" />    								<span>Cấu trúc hệ thống cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="779" data-idquest="779" type="radio" data-stt="169" value="b" />    								<span>Hệ thống thông tin quản lý của tổ chức.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="779" data-idquest="779" type="radio" data-stt="169" value="c" />    								<span>Bộ sưu tập các loại dữ liệu của một tổ chức.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="779" data-idquest="779" type="radio" data-stt="169" value="d" />    								<span>Các thực thể và mối quan hệ của chúng.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-170" class="item-quest">
					<div class="quest-title">Câu 170 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→BC, A→B, B→D, D→E}. Phụ thuộc hàm nào dư thừa?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="972" data-idquest="972" type="radio" data-stt="170" value="a" />    								<span>A→BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="972" data-idquest="972" type="radio" data-stt="170" value="b" />    								<span>A→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="972" data-idquest="972" type="radio" data-stt="170" value="c" />    								<span>D→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="972" data-idquest="972" type="radio" data-stt="170" value="d" />    								<span>B→D</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-171" class="item-quest">
					<div class="quest-title">Câu 171 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Một mô hình dữ liệu là một hệ thống hình thức toán học, bao gồm các hệ thống các ký hiệu và tập hợp các .......... trên cơ sở dữ liệu.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="423" data-idquest="423" type="radio" data-stt="171" value="a" />    								<span>Các phép lưu trữ dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="423" data-idquest="423" type="radio" data-stt="171" value="b" />    								<span>Các phép tìm kiếm, tra cứu thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="423" data-idquest="423" type="radio" data-stt="171" value="c" />    								<span>Phép toán thao tác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="423" data-idquest="423" type="radio" data-stt="171" value="d" />    								<span>Các phép toán đại số quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-172" class="item-quest">
					<div class="quest-title">Câu 172 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Trong mô hình CSDL phân cấp, dữ liệu được biểu diễn bằng cấu trúc cây. Một CSDL phân cấp là tập các cây. Trong mỗi một cây .......... và dưới nó là tập các bản ghi phụ thuộc.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="425" data-idquest="425" type="radio" data-stt="172" value="a" />    								<span>Nhiều bản ghi gốc</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="425" data-idquest="425" type="radio" data-stt="172" value="b" />    								<span>Chỉ chứa một và chỉ một bản ghi gốc</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="425" data-idquest="425" type="radio" data-stt="172" value="c" />    								<span>Một bản ghi gốc và một bản ghi phụ thuộc</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="425" data-idquest="425" type="radio" data-stt="172" value="d" />    								<span>Một bản ghi gốc và nhiều bản ghi phụ thuộc</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-173" class="item-quest">
					<div class="quest-title">Câu 173 :</div>
					<div class="quest-content">
						<span>Phép sửa đổi là phép toán</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="281" data-idquest="281" type="radio" data-stt="173" value="a" />    								<span>Sửa đổi giá trị của một quan hệ hay một nhóm các quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="281" data-idquest="281" type="radio" data-stt="173" value="b" />    								<span>Sửa đổi giá trị của một bộ hay một nhóm các bộ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="281" data-idquest="281" type="radio" data-stt="173" value="c" />    								<span>Sửa đổi mô tả các thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="281" data-idquest="281" type="radio" data-stt="173" value="d" />    								<span>Sửa đổi giá trị của một số thuộc tính</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-174" class="item-quest">
					<div class="quest-title">Câu 174 :</div>
					<div class="quest-content">
						<span>Các bộ dữ liệu trong một quan hệ phải có tính chất:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="517" data-idquest="517" type="radio" data-stt="174" value="a" />    								<span>Mỗi quan hệ phải có khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="517" data-idquest="517" type="radio" data-stt="174" value="b" />    								<span>Với hai bộ dữ liệu bất kỳ, chúng phải khác nhau trên một hoặc nhiều cột</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="517" data-idquest="517" type="radio" data-stt="174" value="c" />    								<span>Tất cả các phương án trên.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="517" data-idquest="517" type="radio" data-stt="174" value="d" />    								<span>Tất cả các bộ dữ liệu phải khác nhau</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-175" class="item-quest">
					<div class="quest-title">Câu 175 :</div>
					<div class="quest-content">
						<span>Quan hệ được gọi là dạng chuẩn 1NF, khi và chỉ khi</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="265" data-idquest="265" type="radio" data-stt="175" value="a" />    								<span>Một thuộc tính có nhiều giá trị khác nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="265" data-idquest="265" type="radio" data-stt="175" value="b" />    								<span>Một quan hệ có nhiều hàng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="265" data-idquest="265" type="radio" data-stt="175" value="c" />    								<span>Một quan hệ có nhiều cột</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="265" data-idquest="265" type="radio" data-stt="175" value="d" />    								<span>Các thuộc tính chỉ chứa các giá trị nguyên tố</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-176" class="item-quest">
					<div class="quest-title">Câu 176 :</div>
					<div class="quest-content">
						<span>Cho bảng NhanVien(MaNV, HoTenNV, MaPB, Luong). Liệt kê danh sách tất cả các nhân viên và được sắp xếp giảm dần theo lương?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="640" data-idquest="640" type="radio" data-stt="176" value="a" />    								<span>SELECT * FROM NhanVien ORDER BY Luong;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="640" data-idquest="640" type="radio" data-stt="176" value="b" />    								<span>SELECT * FROM NhanVien SORT BY Luong DESCENDING;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="640" data-idquest="640" type="radio" data-stt="176" value="c" />    								<span>SELECT * FROM NhanVien ORDER BY Luong DESC;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="640" data-idquest="640" type="radio" data-stt="176" value="d" />    								<span>SELECT * FROM NhanVien IN ORDER OF Luong;</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-177" class="item-quest">
					<div class="quest-title">Câu 177 :</div>
					<div class="quest-content">
						<span>Những đặc tính cơ bản để phân biệt DBMS với các hệ thống lập trình khác?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="701" data-idquest="701" type="radio" data-stt="177" value="a" />    								<span>Quản lý giao tác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="701" data-idquest="701" type="radio" data-stt="177" value="b" />    								<span>Tất cả các phương án trên.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="701" data-idquest="701" type="radio" data-stt="177" value="c" />    								<span>Khả năng truy xuất dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="701" data-idquest="701" type="radio" data-stt="177" value="d" />    								<span>Khả năng quản lý dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-178" class="item-quest">
					<div class="quest-title">Câu 178 :</div>
					<div class="quest-content">
						<span>Câu truy vấn nào sau đây chứa một lỗi?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="532" data-idquest="532" type="radio" data-stt="178" value="a" />    								<span>SELECT empid WHERE empid = 56949 AND lastname = 'SMITH';</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="532" data-idquest="532" type="radio" data-stt="178" value="b" />    								<span>SELECT empid FROM emp;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="532" data-idquest="532" type="radio" data-stt="178" value="c" />    								<span>SELECT empid FROM emp WHERE empid= 493945;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="532" data-idquest="532" type="radio" data-stt="178" value="d" />    								<span>SELECT * FROM emp WHERE empid = 493945;</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-179" class="item-quest">
					<div class="quest-title">Câu 179 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D), F = {A→B, B→A, AB→C}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="910" data-idquest="910" type="radio" data-stt="179" value="a" />    								<span>3NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="910" data-idquest="910" type="radio" data-stt="179" value="b" />    								<span>2NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="910" data-idquest="910" type="radio" data-stt="179" value="c" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="910" data-idquest="910" type="radio" data-stt="179" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-180" class="item-quest">
					<div class="quest-title">Câu 180 :</div>
					<div class="quest-content">
						<span>Cho R(A,B), S(B,C), phép chiếu π_{A,C}(R ⋈ S) tương đương với đáp án nào dưới đây</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1177" data-idquest="1177" type="radio" data-stt="180" value="a" />    								<span>π_{A,C}(R × S) = (π_{A,B}R) ⋈ (π_{B,C}S)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1177" data-idquest="1177" type="radio" data-stt="180" value="b" />    								<span>π_{A,C}(R ⋈ S) = (π_A R) ⋈ (π_C S)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1177" data-idquest="1177" type="radio" data-stt="180" value="c" />    								<span>π_{A,C}(R ⋈ S) = π_{A,C}((π_{A,B}R) ⋈ (π_{B,C}S))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1177" data-idquest="1177" type="radio" data-stt="180" value="d" />    								<span>π_{A,C}(R ⋈ S) = (π_A R) × (π_C S)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-181" class="item-quest">
					<div class="quest-title">Câu 181 :</div>
					<div class="quest-content">
						<span>Nguyên tắc đánh giá tối ưu hóa biểu thức quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="308" data-idquest="308" type="radio" data-stt="181" value="a" />    								<span>Thực hiện phép tích Đề các</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="308" data-idquest="308" type="radio" data-stt="181" value="b" />    								<span>Thực hiện các phép kết nối bằng nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="308" data-idquest="308" type="radio" data-stt="181" value="c" />    								<span>Ưu tiên thực hiện các phép chiếu và chọn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="308" data-idquest="308" type="radio" data-stt="181" value="d" />    								<span>Nhóm các phép tích và chiếu liên tiếp thành một phép toán duy nhất</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-182" class="item-quest">
					<div class="quest-title">Câu 182 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Người quản trị CSDL bảo đảm việc truy nhập CSDL. Kiểm tra, kiểm soát các quyền truy nhập của ........ Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra hoặc từ ngoài vào…</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="417" data-idquest="417" type="radio" data-stt="182" value="a" />    								<span>Người quản trị cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="417" data-idquest="417" type="radio" data-stt="182" value="b" />    								<span>Hệ ứng dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="417" data-idquest="417" type="radio" data-stt="182" value="c" />    								<span>Hệ quản trị cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="417" data-idquest="417" type="radio" data-stt="182" value="d" />    								<span>Người sử dụng</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-183" class="item-quest">
					<div class="quest-title">Câu 183 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(B,K,Q,A,O) với tập phụ thuộc hàm F={BK->QO, K->A, A- >B}. Phụ thuộc hàm nào sau đây không được dẫn xuất ra từ F?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="593" data-idquest="593" type="radio" data-stt="183" value="a" />    								<span>K->B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="593" data-idquest="593" type="radio" data-stt="183" value="b" />    								<span>A->QO</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="593" data-idquest="593" type="radio" data-stt="183" value="c" />    								<span>B->KQO</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="593" data-idquest="593" type="radio" data-stt="183" value="d" />    								<span>K->AQO</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-184" class="item-quest">
					<div class="quest-title">Câu 184 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D), F = {A→B, B→A, C→D, D→C}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="962" data-idquest="962" type="radio" data-stt="184" value="a" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="962" data-idquest="962" type="radio" data-stt="184" value="b" />    								<span>2NF (nhưng không phải 3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="962" data-idquest="962" type="radio" data-stt="184" value="c" />    								<span>3NF (nhưng không phải BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="962" data-idquest="962" type="radio" data-stt="184" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-185" class="item-quest">
					<div class="quest-title">Câu 185 :</div>
					<div class="quest-content">
						<span>INSTRUCTOR(IID, IName, Dept): Chứa thông tin giảng viên
TEACH(IID, CID, Semester,Room): Chứa thông tin giảng viện dạy, môn, kỳ và phòng nào, IID tham chiếu tới IID của INSTRUCTOR, CID tham chiếu tới CID của COURSE, Room tham chiếu tới Room của ROOM.
ROOM(Room, Building, Capacity): Chứa thông tn phòng
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học. Lấy Title của các môn được dạy tại Building='A' trong Semester='2025_Fall'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1033" data-idquest="1033" type="radio" data-stt="185" value="a" />    								<span>﻿πTitle(σBuilding=′A′(ROOM)⋈σSemester=′2025_Fall′(COURSE)⋈TEACH)π_{Title}(σ_{Building='A'}(ROOM) ⋈ σ_{Semester='2025\_Fall'}(COURSE) ⋈ TEACH)πTitle​(σBuilding=′A′​(ROOM)⋈σSemester=′2025_Fall′​(COURSE)⋈TEACH)﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1033" data-idquest="1033" type="radio" data-stt="185" value="b" />    								<span>﻿πTitle(σBuilding=′A′∧Semester=′2025_Fall′(TEACH⋈ROOM⋈COURSE))π_{Title}(σ_{Building='A' ∧ Semester='2025\_Fall'}(TEACH ⋈ ROOM ⋈ COURSE))πTitle​(σBuilding=′A′∧Semester=′2025_Fall′​(TEACH⋈ROOM⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1033" data-idquest="1033" type="radio" data-stt="185" value="c" />    								<span>﻿σBuilding=′A′∧Semester=′2025_Fall′(πTitle(TEACH⋈ROOM⋈COURSE))σ_{Building='A' ∧ Semester='2025\_Fall'}(π_{Title}(TEACH ⋈ ROOM ⋈ COURSE))σBuilding=′A′∧Semester=′2025_Fall′​(πTitle​(TEACH⋈ROOM⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1033" data-idquest="1033" type="radio" data-stt="185" value="d" />    								<span>﻿πTitle(σSemester=′2025_Fall′(TEACH⋈COURSE))−πTitle(σBuilding=′A′(ROOM))π_{Title}(σ_{Semester='2025\_Fall'}(TEACH ⋈ COURSE)) − π_{Title}(σ_{Building='A'}(ROOM))πTitle​(σSemester=′2025_Fall′​(TEACH⋈COURSE))−πTitle​(σBuilding=′A′​(ROOM))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-186" class="item-quest">
					<div class="quest-title">Câu 186 :</div>
					<div class="quest-content">
						<span>Cho câu vấn tin SELECT * FROM R₁, R₂ WHERE R₁.A₁ = R₂.A₂ Hãy chọn một khẳng định đúng sau đây</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="494" data-idquest="494" type="radio" data-stt="186" value="a" />    								<span>σR₁.A₁=R₂.A₂(R₁ ⋈ R₂)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="494" data-idquest="494" type="radio" data-stt="186" value="b" />    								<span>πA₁, A₂(σR₁.A₁=R₂.A₂(R₁ ⋈ R₂))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="494" data-idquest="494" type="radio" data-stt="186" value="c" />    								<span>πA₁, A₂(R₁) ⋈ πA₁, A₂(R₂)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="494" data-idquest="494" type="radio" data-stt="186" value="d" />    								<span>σR₁.A₁=R₂.A₂(R₁) ⋈ σR₁.A₁=R₂.A₂(R₂)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-187" class="item-quest">
					<div class="quest-title">Câu 187 :</div>
					<div class="quest-content">
						<span>Tích Đê Các các quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="288" data-idquest="288" type="radio" data-stt="187" value="a" />    								<span>R₁ × R₂ = P(ΩSigma) := {t | t[Ω] ∈ R₁ and t[Sigma] ∈ R₂}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="288" data-idquest="288" type="radio" data-stt="187" value="b" />    								<span>R₁ × R₂ = P(ΩSigma) := {t | t[Ω] ∈ R₁ or t[Sigma] ∉ R₂}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="288" data-idquest="288" type="radio" data-stt="187" value="c" />    								<span>R₁ × R₂ = P(ΩSigma) := {t | t[Ω] ∈ R₁ and t[Sigma] ∉ R₂}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="288" data-idquest="288" type="radio" data-stt="187" value="d" />    								<span>R₁ × R₂ = P(ΩSigma) := {t | t[Ω] ∈ R₁ or t[Sigma] ∈ R₂}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-188" class="item-quest">
					<div class="quest-title">Câu 188 :</div>
					<div class="quest-content">
						<span>Mapping quan hệ ISA (có giao thoa): PERSON có STUDENT và EMPLOYEE. Thiết kế nào sau đây hỗ trợ giao thoa tốt?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="906" data-idquest="906" type="radio" data-stt="188" value="a" />    								<span>. Bảng PERSON + bảng STUDENT + bảng EMPLOYEE, mỗi bảng con dùng PK/FK về PERSON.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="906" data-idquest="906" type="radio" data-stt="188" value="b" />    								<span>Một bảng PERSON với cột Type nhận 1 giá trị duy nhất.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="906" data-idquest="906" type="radio" data-stt="188" value="c" />    								<span>Chỉ tạo 2 bảng STUDENT và EMPLOYEE, không cần bảng PERSON.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="906" data-idquest="906" type="radio" data-stt="188" value="d" />    								<span>Một bảng PERSON(PID, Name, IsStudent BOOLEAN, IsEmployee BOOLEAN) không lưu thuộc tính riêng như Major hay Salary.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-189" class="item-quest">
					<div class="quest-title">Câu 189 :</div>
					<div class="quest-content">
						<span>Cho lược đồ Cơ sở dữ liệu sau: SinhVien(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop) Lop(MaLop, TenLop, MaKhoa, GVCN) KetQua(MaSV, MaMH, LanThi, Diem) MonHoc(MaMH, TenMH, SoTinChi) Liệt kê danh sách các sinh viên có điểm điểm trung bình cao nhất. Danh sách gồm (MaSV, HoSV, TenSV,DiemTrungBinh)?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="573" data-idquest="573" type="radio" data-stt="189" value="a" />    								<span>Select K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem) From SinhVien S, KetQua K Where S.MASV=K.MASV And DiemTrungBinh>=ALL(Select Avg(Diem) From KetQua Group by MaSV ) Group by K.MaSV, HoSV, TenSV</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="573" data-idquest="573" type="radio" data-stt="189" value="b" />    								<span>Select K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem) From SinhVien S, KetQua K Where S.MASV=K.MASV And DiemTrungBinh>=ALL(Select Avg(Diem) From KetQua Group by MaSV )</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="573" data-idquest="573" type="radio" data-stt="189" value="c" />    								<span>Select K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="573" data-idquest="573" type="radio" data-stt="189" value="d" />    								<span>Select Top 1 K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem) From SinhVien S, KetQua K Where S.MASV=K.MASV Group by K.MaSV, HoSV, TenSV</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-190" class="item-quest">
					<div class="quest-title">Câu 190 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ Q(A,B,C,D) và tập phụ thuộc hàm F={AB->CD, B->C,C->D}. Phụ thuộc hàm nào là dư thưà?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="585" data-idquest="585" type="radio" data-stt="190" value="a" />    								<span>C->D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="585" data-idquest="585" type="radio" data-stt="190" value="b" />    								<span>Không có phụ thuộc hàm dư thưà.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="585" data-idquest="585" type="radio" data-stt="190" value="c" />    								<span>AB->CD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="585" data-idquest="585" type="radio" data-stt="190" value="d" />    								<span>B->C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-191" class="item-quest">
					<div class="quest-title">Câu 191 :</div>
					<div class="quest-content">
						<span>Thực thể là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="781" data-idquest="781" type="radio" data-stt="191" value="a" />    								<span>Các mối liên kết giữa các đối tượng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="781" data-idquest="781" type="radio" data-stt="191" value="b" />    								<span>Các quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="781" data-idquest="781" type="radio" data-stt="191" value="c" />    								<span>Các đối tượng và mối liên kết giữa các đối tượng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="781" data-idquest="781" type="radio" data-stt="191" value="d" />    								<span>Các đối tượng dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-192" class="item-quest">
					<div class="quest-title">Câu 192 :</div>
					<div class="quest-content">
						<span>Trong mô hình cơ sở dữ liệu quan hệ:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="775" data-idquest="775" type="radio" data-stt="192" value="a" />    								<span>Thứ tự của các quan hệ quan trọng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="775" data-idquest="775" type="radio" data-stt="192" value="b" />    								<span>Thứ tự của các cột là không quan trọng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="775" data-idquest="775" type="radio" data-stt="192" value="c" />    								<span>Thứ tự của các cột là quan trọng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="775" data-idquest="775" type="radio" data-stt="192" value="d" />    								<span>Thứ tự của các hàng là quan trọng.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-193" class="item-quest">
					<div class="quest-title">Câu 193 :</div>
					<div class="quest-content">
						<span>Hàm dùng để tính tổng các giá trị của cột kiểu number là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="622" data-idquest="622" type="radio" data-stt="193" value="a" />    								<span>AVERAGE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="622" data-idquest="622" type="radio" data-stt="193" value="b" />    								<span>SUM</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="622" data-idquest="622" type="radio" data-stt="193" value="c" />    								<span>TOTAL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="622" data-idquest="622" type="radio" data-stt="193" value="d" />    								<span>ADD</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-194" class="item-quest">
					<div class="quest-title">Câu 194 :</div>
					<div class="quest-content">
						<span>F = {AB → C, D → EG, C → A, BE → C, BC → D, CG → BD, ACD → B, CE → AG}</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="371" data-idquest="371" type="radio" data-stt="194" value="a" />    								<span>AB, CG, CD là khóa của lược đồ quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="371" data-idquest="371" type="radio" data-stt="194" value="b" />    								<span>EC, CE, BC là khóa của lược đồ quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="371" data-idquest="371" type="radio" data-stt="194" value="c" />    								<span>AB, CG, CD không là khóa của lược đồ quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="371" data-idquest="371" type="radio" data-stt="194" value="d" />    								<span>EB, CE, BC không là khóa của lược đồ quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-195" class="item-quest">
					<div class="quest-title">Câu 195 :</div>
					<div class="quest-content">
						<span>Cơ sở dữ liệu cần thiết phải bảo vệ, vì</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="312" data-idquest="312" type="radio" data-stt="195" value="a" />    								<span>Truy xuất vào cơ sở dữ liệu bằng nhiều ngôn ngữ thao tác dữ liệu khác nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="312" data-idquest="312" type="radio" data-stt="195" value="b" />    								<span>Rất nhiều loại dữ liệu được tải về giữ trên các máy cục bộ để khai thác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="312" data-idquest="312" type="radio" data-stt="195" value="c" />    								<span>Một bộ sưu tập rất lớn về các loại dữ liệu tác nghiệp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="312" data-idquest="312" type="radio" data-stt="195" value="d" />    								<span>Tài nguyên chung, nhiều người cùng sử dụng</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-196" class="item-quest">
					<div class="quest-title">Câu 196 :</div>
					<div class="quest-content">
						<span>Loại dữ liệu nào là loại dữ liệu hợp lệ trong ngôn ngữ SQL?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="845" data-idquest="845" type="radio" data-stt="196" value="a" />    								<span>Tất cả đáp án đều đúng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="845" data-idquest="845" type="radio" data-stt="196" value="b" />    								<span>NUMERIC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="845" data-idquest="845" type="radio" data-stt="196" value="c" />    								<span>FLOAT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="845" data-idquest="845" type="radio" data-stt="196" value="d" />    								<span>CHARACTER</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-197" class="item-quest">
					<div class="quest-title">Câu 197 :</div>
					<div class="quest-content">
						<span>Given COURSE(CID, Title), ENROLL(SID, CID), and assume course titles are unique. Retrieve SIDs of students who enrolled in BOTH courses titled 'Database' and 'AI'. Which expression is correct? (Cho COURSE(CID, Title), ENROLL(SID, CID), và giả sử Title là duy nhất. Lấy SID của sinh viên đã đăng ký CẢ HAI môn có Title là 'Database' và 'AI'. Biểu thức đúng là?)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1054" data-idquest="1054" type="radio" data-stt="197" value="a" />    								<span>﻿πSID(ENROLL)−(πSID(ENROLL⋈σTitle=′Database′(COURSE))∩πSID(ENROLL⋈σTitle=′AI′(COURSE)))π_{SID}(ENROLL) − (π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE)))πSID​(ENROLL)−(πSID​(ENROLL⋈σTitle=′Database′​(COURSE))∩πSID​(ENROLL⋈σTitle=′AI′​(COURSE)))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1054" data-idquest="1054" type="radio" data-stt="197" value="b" />    								<span>﻿πSID(ENROLL⋈σTitle=′Database′(COURSE))∪πSID(ENROLL⋈σTitle=′AI′(COURSE))π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∪ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))πSID​(ENROLL⋈σTitle=′Database′​(COURSE))∪πSID​(ENROLL⋈σTitle=′AI′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1054" data-idquest="1054" type="radio" data-stt="197" value="c" />    								<span>﻿πSID(σTitle=′Database′∧Title=′AI′(ENROLL⋈COURSE))π_{SID}(σ_{Title='Database' ∧ Title='AI'}(ENROLL ⋈ COURSE))πSID​(σTitle=′Database′∧Title=′AI′​(ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1054" data-idquest="1054" type="radio" data-stt="197" value="d" />    								<span>﻿πSID(ENROLL⋈σTitle=′Database′(COURSE))∩πSID(ENROLL⋈σTitle=′AI′(COURSE))π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))πSID​(ENROLL⋈σTitle=′Database′​(COURSE))∩πSID​(ENROLL⋈σTitle=′AI′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-198" class="item-quest">
					<div class="quest-title">Câu 198 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D), F = {A→B, C→D}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="961" data-idquest="961" type="radio" data-stt="198" value="a" />    								<span>2NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="961" data-idquest="961" type="radio" data-stt="198" value="b" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="961" data-idquest="961" type="radio" data-stt="198" value="c" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="961" data-idquest="961" type="radio" data-stt="198" value="d" />    								<span>3NF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-199" class="item-quest">
					<div class="quest-title">Câu 199 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
INSTRUCTOR(IID, IName, Dept): Chứa thông tin giảng viên
ADVISE(SID, IID): Chứa thông tin cố vấn học tập, SID tham chiếu tới SID của STUDENTS, IID tham chiếu tới IID của INSTRUCTOR. Lấy SID của sinh viên được cố vấn bởi giảng viên thuộc Dept='CS'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1034" data-idquest="1034" type="radio" data-stt="199" value="a" />    								<span>﻿πIID(ADVISE⋈σDept=′CS′(INSTRUCTOR))π_{IID}(ADVISE ⋈ σ_{Dept='CS'}(INSTRUCTOR))πIID​(ADVISE⋈σDept=′CS′​(INSTRUCTOR))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1034" data-idquest="1034" type="radio" data-stt="199" value="b" />    								<span>﻿πSID(ADVISE⋈σDept=′CS′(INSTRUCTOR))π_{SID}(ADVISE ⋈ σ_{Dept='CS'}(INSTRUCTOR))πSID​(ADVISE⋈σDept=′CS′​(INSTRUCTOR))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1034" data-idquest="1034" type="radio" data-stt="199" value="c" />    								<span>﻿πSID(ADVISE)−πSID(σDept=′CS′(INSTRUCTOR))π_{SID}(ADVISE) − π_{SID}(σ_{Dept='CS'}(INSTRUCTOR))πSID​(ADVISE)−πSID​(σDept=′CS′​(INSTRUCTOR))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1034" data-idquest="1034" type="radio" data-stt="199" value="d" />    								<span>﻿πSID(σDept=′CS′(ADVISE))π_{SID}(σ_{Dept='CS'}(ADVISE))πSID​(σDept=′CS′​(ADVISE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-200" class="item-quest">
					<div class="quest-title">Câu 200 :</div>
					<div class="quest-content">
						<span>Một số biện pháp bảo vệ cơ sở dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="317" data-idquest="317" type="radio" data-stt="200" value="a" />    								<span>Kiểm tra truy nhập người sử dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="317" data-idquest="317" type="radio" data-stt="200" value="b" />    								<span>Kiểm tra Password</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="317" data-idquest="317" type="radio" data-stt="200" value="c" />    								<span>Người quản trị cơ sở dữ liệu cấp phép truy nhập</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="317" data-idquest="317" type="radio" data-stt="200" value="d" />    								<span>Nhận diện người sử dụng, bảo vệ mức vật lý, kiểm tra truy nhập</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-201" class="item-quest">
					<div class="quest-title">Câu 201 :</div>
					<div class="quest-content">
						<span>Hai biểu thức E1 và E2 tương đương với nhau, ký hiệu là E1 ≅ E2, nếu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="309" data-idquest="309" type="radio" data-stt="201" value="a" />    								<span>Các kết quả giống nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="309" data-idquest="309" type="radio" data-stt="201" value="b" />    								<span>Các quan hệ giống nhau trong biểu thức</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="309" data-idquest="309" type="radio" data-stt="201" value="c" />    								<span>Các quan hệ trong các biểu thức cùng miền xác định</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="309" data-idquest="309" type="radio" data-stt="201" value="d" />    								<span>Chúng biểu diễn cùng một ánh xạ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-202" class="item-quest">
					<div class="quest-title">Câu 202 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="394" data-idquest="394" type="radio" data-stt="202" value="a" />    								<span>CREATE TABLE mô tả các phụ thuận hàm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="394" data-idquest="394" type="radio" data-stt="202" value="b" />    								<span>CREATE TABLE mô tả quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="394" data-idquest="394" type="radio" data-stt="202" value="c" />    								<span>CREATE TABLE mô tả quan hệ và các thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="394" data-idquest="394" type="radio" data-stt="202" value="d" />    								<span>CREATE TABLE mô tả các thuộc tính</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-203" class="item-quest">
					<div class="quest-title">Câu 203 :</div>
					<div class="quest-content">
						<span>Cho R₁(K#: mã khách, TK: tên khách, DC: địa chỉ khách); R₂(B#: mã báo, MB: tên báo, G: giá báo) và R₃(K#, B#, SL: số lượng). Chọn câu đúng sau đây khi in các khách hàng mua các loại báo mà khách hàng K# = "K99" đặt mua</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="506" data-idquest="506" type="radio" data-stt="203" value="a" />    								<span>SELECT K#, TK, DC FROM R1, R2, R3 WHERE R3.K# = "K99" AND R2.B# = R3.B# AND R1.K# = R3.K#</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="506" data-idquest="506" type="radio" data-stt="203" value="b" />    								<span>SELECT K#, TK, DC FROM R1, R2, R3 WHERE R1.K# = "K99" AND R1.K# = R3.K#</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="506" data-idquest="506" type="radio" data-stt="203" value="c" />    								<span>SELECT * FROM R1 WHERE (SELECT B# FROM R1 GROUP BY K#) = (SELECT B# FROM R3 WHERE K# = "K99")</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="506" data-idquest="506" type="radio" data-stt="203" value="d" />    								<span>SELECT K#, TK, DC FROM R1, R2, R3 WHERE R1.K# = "K99" AND R2.B# = R3.B#</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-204" class="item-quest">
					<div class="quest-title">Câu 204 :</div>
					<div class="quest-content">
						<span>F={AB→C, C→D, D→E}. Mệnh đề nào không suy ra từ F?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1193" data-idquest="1193" type="radio" data-stt="204" value="a" />    								<span>C→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1193" data-idquest="1193" type="radio" data-stt="204" value="b" />    								<span>AB→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1193" data-idquest="1193" type="radio" data-stt="204" value="c" />    								<span>AB→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1193" data-idquest="1193" type="radio" data-stt="204" value="d" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-205" class="item-quest">
					<div class="quest-title">Câu 205 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ Q(A,B,C,D,E,G,H) và tập phụ thuộc hàm F={A->BC,D->E,H- >G}. Hỏi Q đạt dạng chuẩn nào?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="587" data-idquest="587" type="radio" data-stt="205" value="a" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="587" data-idquest="587" type="radio" data-stt="205" value="b" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="587" data-idquest="587" type="radio" data-stt="205" value="c" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="587" data-idquest="587" type="radio" data-stt="205" value="d" />    								<span>Dạng chuẩn Boyee-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-206" class="item-quest">
					<div class="quest-title">Câu 206 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi định nghĩa phép chọn</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="343" data-idquest="343" type="radio" data-stt="206" value="a" />    								<span>σ_F(R) := {t | t ∈ R and t_F = "True"}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="343" data-idquest="343" type="radio" data-stt="206" value="b" />    								<span>σ_F(R) := {t | t_F = "True"}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="343" data-idquest="343" type="radio" data-stt="206" value="c" />    								<span>σ_F(R) := {t ∈ R}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="343" data-idquest="343" type="radio" data-stt="206" value="d" />    								<span>σ_F(R) := {t | t_F = "True"}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-207" class="item-quest">
					<div class="quest-title">Câu 207 :</div>
					<div class="quest-content">
						<span>Kết quả của các phép thao tác dữ liệu là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="278" data-idquest="278" type="radio" data-stt="207" value="a" />    								<span>Cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="278" data-idquest="278" type="radio" data-stt="207" value="b" />    								<span>Quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="278" data-idquest="278" type="radio" data-stt="207" value="c" />    								<span>Chuỗi dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="278" data-idquest="278" type="radio" data-stt="207" value="d" />    								<span>Tệp dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-208" class="item-quest">
					<div class="quest-title">Câu 208 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
INSTRUCTOR(IID, IName, Dept): Chứa thông tin giảng viên
ADVISE(SID, IID): Chứa thông tin cố vấn học tập, SID tham chiếu tới SID của STUDENTS, IID tham chiếu tới IID của INSTRUCTOR. Lấy IName của giảng viên cố vấn ít nhất một sinh viên có GPA</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="941" data-idquest="941" type="radio" data-stt="208" value="a" />    								<span>﻿πIName(INSTRUCTOR⋈ADVISE)−πIName(σGPA<2.0(STUDENT))π_{IName}(INSTRUCTOR ⋈ ADVISE) − π_{IName}(σ_{GPA<2.0}(STUDENT))πIName​(INSTRUCTOR⋈ADVISE)−πIName​(σGPA<2.0​(STUDENT))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="941" data-idquest="941" type="radio" data-stt="208" value="b" />    								<span>﻿πIName(σGPA<2.0(INSTRUCTOR⋈ADVISE⋈STUDENT))π_{IName}(σ_{GPA<2.0}(INSTRUCTOR ⋈ ADVISE ⋈ STUDENT))πIName​(σGPA<2.0​(INSTRUCTOR⋈ADVISE⋈STUDENT))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="941" data-idquest="941" type="radio" data-stt="208" value="c" />    								<span>﻿πIName(INSTRUCTOR)−πIName(σGPA<2.0(ADVISE⋈STUDENT))π_{IName}(INSTRUCTOR) − π_{IName}(σ_{GPA<2.0}(ADVISE ⋈ STUDENT))πIName​(INSTRUCTOR)−πIName​(σGPA<2.0​(ADVISE⋈STUDENT))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="941" data-idquest="941" type="radio" data-stt="208" value="d" />    								<span>﻿σGPA<2.0(πIName(INSTRUCTOR⋈ADVISE⋈STUDENT))σ_{GPA<2.0}(π_{IName}(INSTRUCTOR ⋈ ADVISE ⋈ STUDENT))σGPA<2.0​(πIName​(INSTRUCTOR⋈ADVISE⋈STUDENT))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-209" class="item-quest">
					<div class="quest-title">Câu 209 :</div>
					<div class="quest-content">
						<span>Mệnh đề nào trong câu truy vấn giới hạn số cột sẽ trả về?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="648" data-idquest="648" type="radio" data-stt="209" value="a" />    								<span>FROM</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="648" data-idquest="648" type="radio" data-stt="209" value="b" />    								<span>SELECT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="648" data-idquest="648" type="radio" data-stt="209" value="c" />    								<span>WHERE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="648" data-idquest="648" type="radio" data-stt="209" value="d" />    								<span>ORDER BY</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-210" class="item-quest">
					<div class="quest-title">Câu 210 :</div>
					<div class="quest-content">
						<span>Mức độ nhận diện người sử dụng</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="319" data-idquest="319" type="radio" data-stt="210" value="a" />    								<span>Xác định cho hệ thống những thao tác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="319" data-idquest="319" type="radio" data-stt="210" value="b" />    								<span>Người quản trị cung cấp phương tiện cho người sử dụng để hệ thống nhận biết chính xác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="319" data-idquest="319" type="radio" data-stt="210" value="c" />    								<span>Nhận diện bằng cách kiểm tra</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="319" data-idquest="319" type="radio" data-stt="210" value="d" />    								<span>Cho phép người sử dụng truy nhập nếu được phép của người quản trị CSDL</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-211" class="item-quest">
					<div class="quest-title">Câu 211 :</div>
					<div class="quest-content">
						<span>R(A,B,C), F={AB→C, C→A}. Dạng chuẩn cao nhất của R là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1167" data-idquest="1167" type="radio" data-stt="211" value="a" />    								<span>1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1167" data-idquest="1167" type="radio" data-stt="211" value="b" />    								<span>3NF nhưng không BCNF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1167" data-idquest="1167" type="radio" data-stt="211" value="c" />    								<span>2NF nhưng không 3NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1167" data-idquest="1167" type="radio" data-stt="211" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-212" class="item-quest">
					<div class="quest-title">Câu 212 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Biểu thức E1 tương đương với E2, nếu chúng biểu diễn cùng một ánh xạ, nghĩa là .......... giống nhau trong biểu thức, thì kết quả cũng giống nhau.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="475" data-idquest="475" type="radio" data-stt="212" value="a" />    								<span>Các bản ghi</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="475" data-idquest="475" type="radio" data-stt="212" value="b" />    								<span>Các thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="475" data-idquest="475" type="radio" data-stt="212" value="c" />    								<span>Các toán hạng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="475" data-idquest="475" type="radio" data-stt="212" value="d" />    								<span>Các quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-213" class="item-quest">
					<div class="quest-title">Câu 213 :</div>
					<div class="quest-content">
						<span>Tạo lập một Cơ Sở dữ liệu là quá trình:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="717" data-idquest="717" type="radio" data-stt="213" value="a" />    								<span>Thiết kế Cơ Sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="717" data-idquest="717" type="radio" data-stt="213" value="b" />    								<span>Truy vấn Cơ Sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="717" data-idquest="717" type="radio" data-stt="213" value="c" />    								<span>Xử lý Cơ Sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="717" data-idquest="717" type="radio" data-stt="213" value="d" />    								<span>Cấu trúc Cơ Sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-214" class="item-quest">
					<div class="quest-title">Câu 214 :</div>
					<div class="quest-content">
						<span>Trong lược đồ quan hệ, thuộc tính dẫn xuất của ER thường được xử lý thế nào khi ánh xạ sang quan hệ?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1165" data-idquest="1165" type="radio" data-stt="214" value="a" />    								<span>Bắt buộc lưu thành một cột NOT NULL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1165" data-idquest="1165" type="radio" data-stt="214" value="b" />    								<span>Ghép vào khóa chính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1165" data-idquest="1165" type="radio" data-stt="214" value="c" />    								<span>Luôn tạo bảng riêng cho thuộc tính này</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1165" data-idquest="1165" type="radio" data-stt="214" value="d" />    								<span>Bỏ qua và tính bằng view/truy vấn khi cần</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-215" class="item-quest">
					<div class="quest-title">Câu 215 :</div>
					<div class="quest-content">
						<span>Một nhược điểm của một hệ thống cơ sở dữ liệu là _____.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="688" data-idquest="688" type="radio" data-stt="215" value="a" />    								<span>một cỡ file lớn hơn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="688" data-idquest="688" type="radio" data-stt="215" value="b" />    								<span>Năng suất giảm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="688" data-idquest="688" type="radio" data-stt="215" value="c" />    								<span>Tính nguyên vẹn bị giảm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="688" data-idquest="688" type="radio" data-stt="215" value="d" />    								<span>Khiến cho dữ liệu bị phụ thuộc</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-216" class="item-quest">
					<div class="quest-title">Câu 216 :</div>
					<div class="quest-content">
						<span>Xét quan hệ R với tâp thuộc tính B C V K M. Với tập phụ thuộc hàm: B->C, C V->M và M K->B. Hãy xác định tất cả các khóa của R.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="734" data-idquest="734" type="radio" data-stt="216" value="a" />    								<span>B V, C K và V M</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="734" data-idquest="734" type="radio" data-stt="216" value="b" />    								<span>B V M, C V K và V K M</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="734" data-idquest="734" type="radio" data-stt="216" value="c" />    								<span>V K, B Kvà V K M</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="734" data-idquest="734" type="radio" data-stt="216" value="d" />    								<span>B V K, C V K và V K M</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-217" class="item-quest">
					<div class="quest-title">Câu 217 :</div>
					<div class="quest-content">
						<span>Câu nào dưới đây đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="529" data-idquest="529" type="radio" data-stt="217" value="a" />    								<span>Những người dùng cơ sở dữ liệu không nên truy cập cùng thông tin.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="529" data-idquest="529" type="radio" data-stt="217" value="b" />    								<span>Trong một môi trường hướng file, phi cơ sở dữ liệu, dữ liệu thường bị tách thành một vài hệ thống rời rạc, mỗi hệ thống có một tập hợp các file riêng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="529" data-idquest="529" type="radio" data-stt="217" value="c" />    								<span>Dữ liệu người dùng không thể được kết hợp và chia sẻ giữa những người dùng có quyền.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="529" data-idquest="529" type="radio" data-stt="217" value="d" />    								<span>Thường có thể loại bỏ tình trạng dư thừa.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-218" class="item-quest">
					<div class="quest-title">Câu 218 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E,F), F = {A→B, B→D, CD→E, E→F}. Bao đóng (AC)+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="996" data-idquest="996" type="radio" data-stt="218" value="a" />    								<span>{A, C, D, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="996" data-idquest="996" type="radio" data-stt="218" value="b" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="996" data-idquest="996" type="radio" data-stt="218" value="c" />    								<span>{A, B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="996" data-idquest="996" type="radio" data-stt="218" value="d" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-219" class="item-quest">
					<div class="quest-title">Câu 219 :</div>
					<div class="quest-content">
						<span>Cho biết ý nghĩa của đoạn mã lệnh sau: select hoten,msv From ds where msv in (select msv From diem Where diemtoan = 8)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="811" data-idquest="811" type="radio" data-stt="219" value="a" />    								<span>không có đáp án đúng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="811" data-idquest="811" type="radio" data-stt="219" value="b" />    								<span>Hiện hoten,msv của các sinh viên có diemtoan =8</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="811" data-idquest="811" type="radio" data-stt="219" value="c" />    								<span>Hiện các sinh viên có diemtoan =8 trong bảng danh sách hoặc điểm.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="811" data-idquest="811" type="radio" data-stt="219" value="d" />    								<span>. Hiện hoten,msv của các sinh viên có diemtoan =8 mà có msv trong bảng điểm và danh sách</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-220" class="item-quest">
					<div class="quest-title">Câu 220 :</div>
					<div class="quest-content">
						<span>Quan hệ 3NF có thể chấp nhận được trong quá trình tìm kiếm, vì</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="272" data-idquest="272" type="radio" data-stt="220" value="a" />    								<span>Đảm bảo tính toàn vẹn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="272" data-idquest="272" type="radio" data-stt="220" value="b" />    								<span>Thực hiện được các phép cập nhật</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="272" data-idquest="272" type="radio" data-stt="220" value="c" />    								<span>Không xuất hiện dị thường thông tin khi thực hiện các phép lưu trữ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="272" data-idquest="272" type="radio" data-stt="220" value="d" />    								<span>Bao đóng phụ thuộc hàm quá lớn</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-221" class="item-quest">
					<div class="quest-title">Câu 221 :</div>
					<div class="quest-content">
						<span>F={A→B, B→C, C→D}. Mệnh đề đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1144" data-idquest="1144" type="radio" data-stt="221" value="a" />    								<span>AB↛D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1144" data-idquest="1144" type="radio" data-stt="221" value="b" />    								<span>B→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1144" data-idquest="1144" type="radio" data-stt="221" value="c" />    								<span>A→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1144" data-idquest="1144" type="radio" data-stt="221" value="d" />    								<span>D→A</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-222" class="item-quest">
					<div class="quest-title">Câu 222 :</div>
					<div class="quest-content">
						<span>Ưu điểm cơ sở dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="176" data-idquest="176" type="radio" data-stt="222" value="a" />    								<span>Giảm dư thừa, nhất quán và toàn vẹn của dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="176" data-idquest="176" type="radio" data-stt="222" value="b" />    								<span>Khả năng xuất hiện mâu thuẫn và không nhất quán dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="176" data-idquest="176" type="radio" data-stt="222" value="c" />    								<span>Xuất hiện dị thường thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="176" data-idquest="176" type="radio" data-stt="222" value="d" />    								<span>Các thuộc tính được mô tả trong nhiều tệp dữ liệu khác nhau</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-223" class="item-quest">
					<div class="quest-title">Câu 223 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ Q(A,B,C,D) và tập phụ thuộc hàm F={AB->C, B->D,BC->A}. Hỏi Q đạt dạng chuẩn nào?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="583" data-idquest="583" type="radio" data-stt="223" value="a" />    								<span>Dạng chuẩn Boyee-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="583" data-idquest="583" type="radio" data-stt="223" value="b" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="583" data-idquest="583" type="radio" data-stt="223" value="c" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="583" data-idquest="583" type="radio" data-stt="223" value="d" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-224" class="item-quest">
					<div class="quest-title">Câu 224 :</div>
					<div class="quest-content">
						<span>Given relation R(A,B,C,D,E) with functional dependency set F = { A→BC, B→C, CD→E, E→A }. Which of the following non-trivial functional dependencies can be inferred from F? ( Cho quan hệ R(A,B,C,D,E) với tập phụ thuộc hàm F = { A→BC, B→C, CD→E, E→A }. Phụ thuộc hàm không tầm thường nào sau đây được suy ra từ F? )</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1085" data-idquest="1085" type="radio" data-stt="224" value="a" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1085" data-idquest="1085" type="radio" data-stt="224" value="b" />    								<span>B→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1085" data-idquest="1085" type="radio" data-stt="224" value="c" />    								<span>BD→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1085" data-idquest="1085" type="radio" data-stt="224" value="d" />    								<span>D→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-225" class="item-quest">
					<div class="quest-title">Câu 225 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, C→A, A→D, D→E}. Phụ thuộc hàm nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="947" data-idquest="947" type="radio" data-stt="225" value="a" />    								<span>D→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="947" data-idquest="947" type="radio" data-stt="225" value="b" />    								<span>C→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="947" data-idquest="947" type="radio" data-stt="225" value="c" />    								<span>E→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="947" data-idquest="947" type="radio" data-stt="225" value="d" />    								<span>B→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-226" class="item-quest">
					<div class="quest-title">Câu 226 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về phụ thuộc bắc cầu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="802" data-idquest="802" type="radio" data-stt="226" value="a" />    								<span>Nếu A --> B và B --> C thì AC --> BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="802" data-idquest="802" type="radio" data-stt="226" value="b" />    								<span>Nếu một thuộc tính xác định thuộc tính thứ hai, hoặc xác định thuộc tính thứ ba, khi đó thuộc tính thứ nhất xác định thuộc tính thứ 3.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="802" data-idquest="802" type="radio" data-stt="226" value="c" />    								<span>Nếu A --> B và B --> C thì A --> C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="802" data-idquest="802" type="radio" data-stt="226" value="d" />    								<span>Nếu một thuộc tính xác định thuộc tính thứ hai thì nó xác định thuộc tính thứ ba</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-227" class="item-quest">
					<div class="quest-title">Câu 227 :</div>
					<div class="quest-content">
						<span>Cho bảng sau: SanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc, SoLuongTon) Cho biết có bao nhiêu sản phẩm thuộc nhóm hàng 'HW'?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="540" data-idquest="540" type="radio" data-stt="227" value="a" />    								<span>Select sum(MaSP) From SanPham Where NhomHang='HW'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="540" data-idquest="540" type="radio" data-stt="227" value="b" />    								<span>Select Count * From SanPham</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="540" data-idquest="540" type="radio" data-stt="227" value="c" />    								<span>Select Count(*) From SanPham Where NhomHang='HW'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="540" data-idquest="540" type="radio" data-stt="227" value="d" />    								<span>Select Count From SanPham Where NhomHang='HW'</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-228" class="item-quest">
					<div class="quest-title">Câu 228 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Chuẩn hoá dữ liệu là quá trình biến đổi dữ liệu thành nhiều tập nhỏ hơn sao cho..</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="450" data-idquest="450" type="radio" data-stt="228" value="a" />    								<span>Không rõ ràng trong suy diễn, bảo đảm tính toàn vẹn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="450" data-idquest="450" type="radio" data-stt="228" value="b" />    								<span>Các quan hệ thành viên có cấu trúc đơn giản, không chứa dị thường thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="450" data-idquest="450" type="radio" data-stt="228" value="c" />    								<span>Các quan hệ thành viên không tổn thất thông tin, đảm bảo tính độc lập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="450" data-idquest="450" type="radio" data-stt="228" value="d" />    								<span>Tối thiểu việc lặp lại, tránh sự không rõ ràng, nhập nhằng trong suy diễn</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-229" class="item-quest">
					<div class="quest-title">Câu 229 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về bao đóng các thuộc tính</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="362" data-idquest="362" type="radio" data-stt="229" value="a" />    								<span>Hợp tất cả vế phải của các phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="362" data-idquest="362" type="radio" data-stt="229" value="b" />    								<span>Bao đóng của X ứng với tập F là hợp của vế phải của các phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="362" data-idquest="362" type="radio" data-stt="229" value="c" />    								<span>Bao đóng của X ứng với tập F là hợp của vế trái của các phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="362" data-idquest="362" type="radio" data-stt="229" value="d" />    								<span>Thông tin về đối tượng</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-230" class="item-quest">
					<div class="quest-title">Câu 230 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R và tập các phụ thuộc hàm F={AB->E, AG->I, BE->I, E->G, GI->H}. Phụ thuộc hàm nào sau đây được suy ra từ F?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="591" data-idquest="591" type="radio" data-stt="230" value="a" />    								<span>AB->GH</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="591" data-idquest="591" type="radio" data-stt="230" value="b" />    								<span>B->I</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="591" data-idquest="591" type="radio" data-stt="230" value="c" />    								<span>A->G</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="591" data-idquest="591" type="radio" data-stt="230" value="d" />    								<span>A->I</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-231" class="item-quest">
					<div class="quest-title">Câu 231 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy (SID, Name) của sinh viên đăng ký môn có Credits ≥ 4 trong học kỳ '2025_Fall'. Biểu thức đúng là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1035" data-idquest="1035" type="radio" data-stt="231" value="a" />    								<span>﻿πSID,Name(σCredits≥4∧Semester=′2025_Fall′(STUDENT⋈ENROLL⋈COURSE))π_{SID,Name}(σ_{Credits≥4 ∧ Semester='2025\_Fall'}(STUDENT ⋈ ENROLL ⋈ COURSE))πSID,Name​(σCredits≥4∧Semester=′2025_Fall′​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1035" data-idquest="1035" type="radio" data-stt="231" value="b" />    								<span>﻿σCredits≥4∧Semester=′2025_Fall′(πSID,Name(STUDENT⋈ENROLL⋈COURSE))σ_{Credits≥4 ∧ Semester='2025\_Fall'}(π_{SID,Name}(STUDENT ⋈ ENROLL ⋈ COURSE))σCredits≥4∧Semester=′2025_Fall′​(πSID,Name​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1035" data-idquest="1035" type="radio" data-stt="231" value="c" />    								<span>﻿πSID,Name(σGPA≥4∧Semester=′2025_Fall′(STUDENT⋈ENROLL⋈COURSE))π_{SID,Name}(σ_{GPA≥4 ∧ Semester='2025\_Fall'}(STUDENT ⋈ ENROLL ⋈ COURSE))πSID,Name​(σGPA≥4∧Semester=′2025_Fall′​(STUDENT⋈ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1035" data-idquest="1035" type="radio" data-stt="231" value="d" />    								<span>﻿πSID,Name(σCredits≥4(STUDENT)⋈σSemester=′2025_Fall′(ENROLL))π_{SID,Name}(σ_{Credits≥4}(STUDENT) ⋈ σ_{Semester='2025\_Fall'}(ENROLL))πSID,Name​(σCredits≥4​(STUDENT)⋈σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-232" class="item-quest">
					<div class="quest-title">Câu 232 :</div>
					<div class="quest-content">
						<span>Khi ta nói đến một quan hệ gồm có n-bộ (tuple), n ở đây có nghĩa là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="631" data-idquest="631" type="radio" data-stt="232" value="a" />    								<span>Số bộ trong quan hệ.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="631" data-idquest="631" type="radio" data-stt="232" value="b" />    								<span>Số quan hệ trong Cơ sở dữ liệu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="631" data-idquest="631" type="radio" data-stt="232" value="c" />    								<span>Số thuộc tính trong quan hệ.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="631" data-idquest="631" type="radio" data-stt="232" value="d" />    								<span>Số byte trong một bộ.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-233" class="item-quest">
					<div class="quest-title">Câu 233 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: K# mã thuê bao, TB tên thuê bao, SDT số điện thoại, DC địa chỉ. Chọn câu đúng sau đây khi tính tổng thuê bao</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="495" data-idquest="495" type="radio" data-stt="233" value="a" />    								<span>SELECT AVG FROM R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="495" data-idquest="495" type="radio" data-stt="233" value="b" />    								<span>SELECT SUM(*) FROM R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="495" data-idquest="495" type="radio" data-stt="233" value="c" />    								<span>SELECT COUNT(*) FROM R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="495" data-idquest="495" type="radio" data-stt="233" value="d" />    								<span>SELECT * FROM R</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-234" class="item-quest">
					<div class="quest-title">Câu 234 :</div>
					<div class="quest-content">
						<span>Bạn đang thiết kế một mô hình cơ sở dữ liệu để quản lý sinh viên. Mỗi sinh viên có thể học nhiều hơn một lớp, mỗi lớp có nhiều sinh viên nhưng chỉ được 1 giáo viên dạy. Bạn có 3 thực thể Lớp, Sinh viên, giáo viên trong cơ sở dữ liệu. Dạng quan hệ nào sau đây phải có trong quan hệ giữa Sinh viên và lớp học?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="515" data-idquest="515" type="radio" data-stt="234" value="a" />    								<span>Một - Một</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="515" data-idquest="515" type="radio" data-stt="234" value="b" />    								<span>Không - Nhiều</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="515" data-idquest="515" type="radio" data-stt="234" value="c" />    								<span>Nhiều - Nhiều</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="515" data-idquest="515" type="radio" data-stt="234" value="d" />    								<span>Một - Nhiều</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-235" class="item-quest">
					<div class="quest-title">Câu 235 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Biến đổi một biểu thức đại số quan hệ về một biểu thức tương đương, cho cùng một kết quả .......</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="470" data-idquest="470" type="radio" data-stt="235" value="a" />    								<span>Bảo toàn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="470" data-idquest="470" type="radio" data-stt="235" value="b" />    								<span>Không tổn thất thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="470" data-idquest="470" type="radio" data-stt="235" value="c" />    								<span>Bảo đảm độc lập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="470" data-idquest="470" type="radio" data-stt="235" value="d" />    								<span>Với chi phí thời gian thực hiện và sử dụng bộ nhớ ít hơn rất nhiều</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-236" class="item-quest">
					<div class="quest-title">Câu 236 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="352" data-idquest="352" type="radio" data-stt="236" value="a" />    								<span>Số điện thoại → Họ tên thuê bao là phụ thuộc phản xạ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="352" data-idquest="352" type="radio" data-stt="236" value="b" />    								<span>Số chứng minh thư → Họ tên là phụ thuộc phản xạ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="352" data-idquest="352" type="radio" data-stt="236" value="c" />    								<span>(Số thứ tự, Mã lớp) → Mã lớp là phụ thuộc phản xạ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="352" data-idquest="352" type="radio" data-stt="236" value="d" />    								<span>Số điện thoại → Mã vùng là phụ thuộc phản xạ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-237" class="item-quest">
					<div class="quest-title">Câu 237 :</div>
					<div class="quest-content">
						<span>Cho bảng SinhVien(MaSV,TenSV,ChuyenNganh) với khóa chính là [Masv, ChuyenNganh]. Các sinh viên có thể học nhiều chuyên ngành khác nhau. Tạo câu truy vấn liệt kê danh sách các sinh viên không thuộc chuyên ngành CNTT.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="544" data-idquest="544" type="radio" data-stt="237" value="a" />    								<span>SELECT * FROM SinhVien HAVING ChuyenNganh <> 'CNTT"</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="544" data-idquest="544" type="radio" data-stt="237" value="b" />    								<span>SELECT * FROM SinhVien WHERE MaSV NOT IN (SELECT MaSV FROM</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="544" data-idquest="544" type="radio" data-stt="237" value="c" />    								<span>SELECT * FROM SinhVien WHERE MaSV NOT IN (SELECT MaSV FROM SinhVien WHERE ChuyenNganh = 'CNTT')</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="544" data-idquest="544" type="radio" data-stt="237" value="d" />    								<span>SELECT * FROM SinhVien GROUP BY ChuyenNganh HAVING ChuyenNganh <> 'CNTT"</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-238" class="item-quest">
					<div class="quest-title">Câu 238 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="806" data-idquest="806" type="radio" data-stt="238" value="a" />    								<span>Phân loại theo các cột được mô tả sau GROUP BY.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="806" data-idquest="806" type="radio" data-stt="238" value="b" />    								<span>Sắp xếp các bản ghi theo khoá được mô tả sau GROUP BY.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="806" data-idquest="806" type="radio" data-stt="238" value="c" />    								<span>GROUP BY sẽ phân hoạch quan hệ thành nhiều nhóm tách biệt nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="806" data-idquest="806" type="radio" data-stt="238" value="d" />    								<span>GROUP BY sẽ chia dọc quan hệ thành nhiều nhóm</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-239" class="item-quest">
					<div class="quest-title">Câu 239 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→C, C→E, BE→D}. Bao đóng A+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1019" data-idquest="1019" type="radio" data-stt="239" value="a" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1019" data-idquest="1019" type="radio" data-stt="239" value="b" />    								<span>{A, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1019" data-idquest="1019" type="radio" data-stt="239" value="c" />    								<span>{A, C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1019" data-idquest="1019" type="radio" data-stt="239" value="d" />    								<span>{A, C, E}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-240" class="item-quest">
					<div class="quest-title">Câu 240 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về các bước triển khai mô hình thực thể quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="345" data-idquest="345" type="radio" data-stt="240" value="a" />    								<span>Xác định nội dung, yêu cầu của các thực thể</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="345" data-idquest="345" type="radio" data-stt="240" value="b" />    								<span>Mô tả thông tin về các đối tượng và xác định mối quan hệ giữa các đối tượng cần thiết kế</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="345" data-idquest="345" type="radio" data-stt="240" value="c" />    								<span>Phân tích yêu cầu, xác định các thực thể, chuẩn hóa dữ liệu và thiết kế vật lý</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="345" data-idquest="345" type="radio" data-stt="240" value="d" />    								<span>Phân tích yêu cầu, xác định các thực thể và các mối liên kết, tích hợp yêu cầu, chuyển đổi về các quan hệ, chuẩn hóa dữ liệu và thiết kế vật lý</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-241" class="item-quest">
					<div class="quest-title">Câu 241 :</div>
					<div class="quest-content">
						<span>Cho CSDL gồm các bảng sau: SinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc) KetQua(MaSV,MaMH,Diem) MonHoc(MaMH,TenMH) Cho câu truy vấn SQL sau: SELECT TenSV,Avg(Diem) FROM SinhVien s,KetQua k WHERE s.MaSV =k.MaSV Chọn câu trả lời đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="567" data-idquest="567" type="radio" data-stt="241" value="a" />    								<span>Câu truy vấn trên bị lỗi, không thể thực hiện được.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="567" data-idquest="567" type="radio" data-stt="241" value="b" />    								<span>Câu truy vấn trên trả về danh sách các tên sinh viên và điểm của từng môn học.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="567" data-idquest="567" type="radio" data-stt="241" value="c" />    								<span>Tất cả đều sai.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="567" data-idquest="567" type="radio" data-stt="241" value="d" />    								<span>Câu truy vấn trên trả về danh sách các tên sinh viên và điểm trung bình của từng sinh viên đó.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-242" class="item-quest">
					<div class="quest-title">Câu 242 :</div>
					<div class="quest-content">
						<span>F={AB→C, C→D}. ﻿AB+AB^+AB+﻿ là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1156" data-idquest="1156" type="radio" data-stt="242" value="a" />    								<span>{A,B}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1156" data-idquest="1156" type="radio" data-stt="242" value="b" />    								<span>{A,B,C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1156" data-idquest="1156" type="radio" data-stt="242" value="c" />    								<span>{A,B,D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1156" data-idquest="1156" type="radio" data-stt="242" value="d" />    								<span>{A,B,C,D}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-243" class="item-quest">
					<div class="quest-title">Câu 243 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R(A,B,C), F={A→B, B→C}. Khóa ứng viên là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1138" data-idquest="1138" type="radio" data-stt="243" value="a" />    								<span>BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1138" data-idquest="1138" type="radio" data-stt="243" value="b" />    								<span>AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1138" data-idquest="1138" type="radio" data-stt="243" value="c" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1138" data-idquest="1138" type="radio" data-stt="243" value="d" />    								<span>A</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-244" class="item-quest">
					<div class="quest-title">Câu 244 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy SID của sinh viên đã đăng ký cả hai môn có CID='C001' và CID='C002'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="867" data-idquest="867" type="radio" data-stt="244" value="a" />    								<span>﻿πSID(σCID=′C001′(ENROLL))∩πSID(σCID=′C002′(ENROLL))π_{SID}(σ_{CID='C001'}(ENROLL)) ∩ π_{SID}(σ_{CID='C002'}(ENROLL))πSID​(σCID=′C001′​(ENROLL))∩πSID​(σCID=′C002′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="867" data-idquest="867" type="radio" data-stt="244" value="b" />    								<span>﻿πSID(σCID=′C001′∧CID=′C002′(ENROLL))π_{SID}(σ_{CID='C001' ∧ CID='C002'}(ENROLL))πSID​(σCID=′C001′∧CID=′C002′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="867" data-idquest="867" type="radio" data-stt="244" value="c" />    								<span>﻿πSID(σCID=′C001′(ENROLL))∪πSID(σCID=′C002′(ENROLL))π_{SID}(σ_{CID='C001'}(ENROLL)) ∪ π_{SID}(σ_{CID='C002'}(ENROLL))πSID​(σCID=′C001′​(ENROLL))∪πSID​(σCID=′C002′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="867" data-idquest="867" type="radio" data-stt="244" value="d" />    								<span>﻿πCID(σSID=′C001′(ENROLL))∩πCID(σSID=′C002′(ENROLL))π_{CID}(σ_{SID='C001'}(ENROLL)) ∩ π_{CID}(σ_{SID='C002'}(ENROLL))πCID​(σSID=′C001′​(ENROLL))∩πCID​(σSID=′C002′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-245" class="item-quest">
					<div class="quest-title">Câu 245 :</div>
					<div class="quest-content">
						<span>Cho các bảng sau: KhachHang (MaKH, TenKH, ThanhPho) SanPham(MaSP, TenSP, SoLuong, DonGia) DaiLy (MaDL, TenDL, ThanhPho, HueHong) DatHang (MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien). Chọn câu lệnh SQL để giải quyết câu truy vấn sau: Tăng giá cuả mỗi sản phẩm trong bảng SanPham lên 10% cho tất cả các sản phẩm mà khách hàng 'C01' đặt mua.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="557" data-idquest="557" type="radio" data-stt="245" value="a" />    								<span>Update SanPham set DonGia = 0.1 * DonGia where MaSP in (select MaSP from</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="557" data-idquest="557" type="radio" data-stt="245" value="b" />    								<span>Update SanPham set DonGia= DonGia * 1.1 where DatHang.MaKH = 'C01';</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="557" data-idquest="557" type="radio" data-stt="245" value="c" />    								<span>Update SanPham set DonGia = 1.1 * DonGia where MaSP in (select MaSP from DatHang where MaKH = 'C01');</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="557" data-idquest="557" type="radio" data-stt="245" value="d" />    								<span>Update SanPham, DatHang set SanPham.DonGia = SanPham.DonGia * 10% where DatHang.MaKH = 'C01';</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-246" class="item-quest">
					<div class="quest-title">Câu 246 :</div>
					<div class="quest-content">
						<span>Dạng thu hồi quyền truy nhập</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="322" data-idquest="322" type="radio" data-stt="246" value="a" />    								<span>REVOKE \<Các thao tác\> ON \<Quan hệ\> FROM \<Nhóm người sử dụng\></span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="322" data-idquest="322" type="radio" data-stt="246" value="b" />    								<span>REVOKE \<Người sử dụng\> ON \<Quan hệ\> FROM \<Các thao tác\></span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="322" data-idquest="322" type="radio" data-stt="246" value="c" />    								<span>REVOKE SELECT ON \<Quan hệ\> FROM \<Nhóm người sử dụng\></span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="322" data-idquest="322" type="radio" data-stt="246" value="d" />    								<span>REVOKE \<Quan hệ\> ON \<Thuộc tính\> FROM \<Nhóm người sử dụng\></span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-247" class="item-quest">
					<div class="quest-title">Câu 247 :</div>
					<div class="quest-content">
						<span>Phương pháp nào dưới đây là phương pháp cơ bản để join các table với nhau</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="860" data-idquest="860" type="radio" data-stt="247" value="a" />    								<span>Natural JOIN</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="860" data-idquest="860" type="radio" data-stt="247" value="b" />    								<span>Subqueries</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="860" data-idquest="860" type="radio" data-stt="247" value="c" />    								<span>Tất cả đáp án đều đúng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="860" data-idquest="860" type="radio" data-stt="247" value="d" />    								<span>Union JOIN</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-248" class="item-quest">
					<div class="quest-title">Câu 248 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→BC, B→D, D→E}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1006" data-idquest="1006" type="radio" data-stt="248" value="a" />    								<span>3NF (nhưng không phải BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1006" data-idquest="1006" type="radio" data-stt="248" value="b" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1006" data-idquest="1006" type="radio" data-stt="248" value="c" />    								<span>2NF (nhưng không phải 3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1006" data-idquest="1006" type="radio" data-stt="248" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-249" class="item-quest">
					<div class="quest-title">Câu 249 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về thuộc tính dư thừa</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="365" data-idquest="365" type="radio" data-stt="249" value="a" />    								<span>A₁A₂ → B, A₁ dư thừa khi A₂ → B phụ thuộc đầy đủ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="365" data-idquest="365" type="radio" data-stt="249" value="b" />    								<span>A₁A₂ → B, A₁ dư thừa khi A₂ không xác định B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="365" data-idquest="365" type="radio" data-stt="249" value="c" />    								<span>A₁A₂ → B, A₁ dư thừa khi A₂ → B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="365" data-idquest="365" type="radio" data-stt="249" value="d" />    								<span>A₁A₂ → B, A₁ dư thừa khi A₁A₂ → B phụ thuộc đầy đủ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-250" class="item-quest">
					<div class="quest-title">Câu 250 :</div>
					<div class="quest-content">
						<span>Thuộc tính của thực thể được biểu diễn trong lược đồ ERD thông qua:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="818" data-idquest="818" type="radio" data-stt="250" value="a" />    								<span>Hình chữ nhật</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="818" data-idquest="818" type="radio" data-stt="250" value="b" />    								<span>Hình elip</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="818" data-idquest="818" type="radio" data-stt="250" value="c" />    								<span>Hình thoi</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="818" data-idquest="818" type="radio" data-stt="250" value="d" />    								<span>Mũi tên</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-251" class="item-quest">
					<div class="quest-title">Câu 251 :</div>
					<div class="quest-content">
						<span>Các phép toán gộp nhóm được sử dụng sau mệnh đề</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="299" data-idquest="299" type="radio" data-stt="251" value="a" />    								<span>WHERE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="299" data-idquest="299" type="radio" data-stt="251" value="b" />    								<span>FROM</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="299" data-idquest="299" type="radio" data-stt="251" value="c" />    								<span>GROUP BY</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="299" data-idquest="299" type="radio" data-stt="251" value="d" />    								<span>SELECT</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-252" class="item-quest">
					<div class="quest-title">Câu 252 :</div>
					<div class="quest-content">
						<span>Hệ quản trị CSDL - HQTCSDL (DataBase Management System - DBMS) là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="759" data-idquest="759" type="radio" data-stt="252" value="a" />    								<span>Các phần mềm ứng dụng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="759" data-idquest="759" type="radio" data-stt="252" value="b" />    								<span>Phần mềm điều khiển các chiến lược truy nhập CSDL.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="759" data-idquest="759" type="radio" data-stt="252" value="c" />    								<span>Hệ điều hành</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="759" data-idquest="759" type="radio" data-stt="252" value="d" />    								<span>Các phần mềm hệ thống.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-253" class="item-quest">
					<div class="quest-title">Câu 253 :</div>
					<div class="quest-content">
						<span>Cho hình ERD, hỏi đây là loại mối quan hệ nào? 

\rule{1.5cm}{0.4pt}
\fbox{\textbf{DUAN}}">﻿NHANVIENthamgia>DUAN\fbox{\textbf{NHANVIEN}}
\rule{1.5cm}{0.4pt}
\Big
\rule{1.5cm}{0.4pt}
\fbox{\textbf{DUAN}}NHANVIEN​⟨thamgia⟩DUAN​﻿
Trong đó:">﻿XXXX>\Big⟨XXXX⟩﻿: quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1209" data-idquest="1209" type="radio" data-stt="253" value="a" />    								<span>N–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1209" data-idquest="1209" type="radio" data-stt="253" value="b" />    								<span>1–N</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1209" data-idquest="1209" type="radio" data-stt="253" value="c" />    								<span>Tự liên kết</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1209" data-idquest="1209" type="radio" data-stt="253" value="d" />    								<span>1–1</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-254" class="item-quest">
					<div class="quest-title">Câu 254 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn có sinh viên Major='CS' đăng ký trong Semester='2025_Spring'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="942" data-idquest="942" type="radio" data-stt="254" value="a" />    								<span>﻿πCID(σMajor=′CS′∧Semester=′2025_Spring′(STUDENT⋈ENROLL))π_{CID}(σ_{Major='CS' ∧ Semester='2025\_Spring'}(STUDENT ⋈ ENROLL))πCID​(σMajor=′CS′∧Semester=′2025_Spring′​(STUDENT⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="942" data-idquest="942" type="radio" data-stt="254" value="b" />    								<span>﻿πCID(σMajor=′CS′(STUDENT))∩πCID(σSemester=′2025_Spring′(ENROLL))π_{CID}(σ_{Major='CS'}(STUDENT)) ∩ π_{CID}(σ_{Semester='2025\_Spring'}(ENROLL))πCID​(σMajor=′CS′​(STUDENT))∩πCID​(σSemester=′2025_Spring′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="942" data-idquest="942" type="radio" data-stt="254" value="c" />    								<span>﻿πCID(σMajor=′CS′(ENROLL))π_{CID}(σ_{Major='CS'}(ENROLL))πCID​(σMajor=′CS′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="942" data-idquest="942" type="radio" data-stt="254" value="d" />    								<span>﻿πCID(σSemester=′2025_Spring′(STUDENT))⋈ENROLLπ_{CID}(σ_{Semester='2025\_Spring'}(STUDENT)) ⋈ ENROLLπCID​(σSemester=′2025_Spring′​(STUDENT))⋈ENROLL﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-255" class="item-quest">
					<div class="quest-title">Câu 255 :</div>
					<div class="quest-content">
						<span>Quy tắc bắc cầu trong hệ tiên đề Armstrong:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="787" data-idquest="787" type="radio" data-stt="255" value="a" />    								<span>Nếu A --> B và BC --> D thì A --> D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="787" data-idquest="787" type="radio" data-stt="255" value="b" />    								<span>Nếu A --> B và B --> A thì A --> C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="787" data-idquest="787" type="radio" data-stt="255" value="c" />    								<span>Nếu A --> BC và BD --> E thì A --> E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="787" data-idquest="787" type="radio" data-stt="255" value="d" />    								<span>Nếu A --> B và B --> C thì A --> C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-256" class="item-quest">
					<div class="quest-title">Câu 256 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, C→B, B→D, D→E}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="982" data-idquest="982" type="radio" data-stt="256" value="a" />    								<span>2NF (nhưng không phải 3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="982" data-idquest="982" type="radio" data-stt="256" value="b" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="982" data-idquest="982" type="radio" data-stt="256" value="c" />    								<span>3NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="982" data-idquest="982" type="radio" data-stt="256" value="d" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-257" class="item-quest">
					<div class="quest-title">Câu 257 :</div>
					<div class="quest-content">
						<span>Quan hệ N–N Enroll giữa Student và Course, có thuộc tính Grade. Ánh xạ đúng là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1096" data-idquest="1096" type="radio" data-stt="257" value="a" />    								<span>STUDENT(SID PK); COURSE(CID PK); ENROLL(SID FK, CID FK, Grade, PK(SID,CID))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1096" data-idquest="1096" type="radio" data-stt="257" value="b" />    								<span>STUDENT(SID PK, CID FK, Grade); COURSE(CID PK)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1096" data-idquest="1096" type="radio" data-stt="257" value="c" />    								<span>COURSE(CID PK, SID FK, Grade); STUDENT(SID PK)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1096" data-idquest="1096" type="radio" data-stt="257" value="d" />    								<span>ENROLL(SID PK, CID PK, Grade), không FK</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-258" class="item-quest">
					<div class="quest-title">Câu 258 :</div>
					<div class="quest-content">
						<span>Mệnh đề nào sau đây được dùng để nhập dữ liệu vào bảng publishers</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="647" data-idquest="647" type="radio" data-stt="258" value="a" />    								<span>insert into publishers data ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="647" data-idquest="647" type="radio" data-stt="258" value="b" />    								<span>insert into publishers tuples ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="647" data-idquest="647" type="radio" data-stt="258" value="c" />    								<span>insert into publishers entities ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="647" data-idquest="647" type="radio" data-stt="258" value="d" />    								<span>insert into publishers values ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-259" class="item-quest">
					<div class="quest-title">Câu 259 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, C→D, D→E}. Phụ thuộc hàm nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="897" data-idquest="897" type="radio" data-stt="259" value="a" />    								<span>AB→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="897" data-idquest="897" type="radio" data-stt="259" value="b" />    								<span>E→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="897" data-idquest="897" type="radio" data-stt="259" value="c" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="897" data-idquest="897" type="radio" data-stt="259" value="d" />    								<span>B→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-260" class="item-quest">
					<div class="quest-title">Câu 260 :</div>
					<div class="quest-content">
						<span>R(A,B,C,D,E,F), F={A→BC, C→D, E→F}. FD nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="869" data-idquest="869" type="radio" data-stt="260" value="a" />    								<span>A→F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="869" data-idquest="869" type="radio" data-stt="260" value="b" />    								<span>C→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="869" data-idquest="869" type="radio" data-stt="260" value="c" />    								<span>D→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="869" data-idquest="869" type="radio" data-stt="260" value="d" />    								<span>A→D</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-261" class="item-quest">
					<div class="quest-title">Câu 261 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Trong CSDL quan hệ, các phép toán lưu trữ là các phép chèn thêm, sửa đổi và loại bỏ. Khi thao tác ....... và đảm bảo tính nhất quán dữ liệu và tính toàn vẹn dữ liệu.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="434" data-idquest="434" type="radio" data-stt="261" value="a" />    								<span>Tổn thất thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="434" data-idquest="434" type="radio" data-stt="261" value="b" />    								<span>Độc lập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="434" data-idquest="434" type="radio" data-stt="261" value="c" />    								<span>Bảo mật thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="434" data-idquest="434" type="radio" data-stt="261" value="d" />    								<span>Không dị thường thông tin</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-262" class="item-quest">
					<div class="quest-title">Câu 262 :</div>
					<div class="quest-content">
						<span>Câu nào sau đây dùng để xoá bảng KhachHang ra khỏi một lược đồ cơ sở dữ liệu?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="530" data-idquest="530" type="radio" data-stt="262" value="a" />    								<span>Remove table KhachHang</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="530" data-idquest="530" type="radio" data-stt="262" value="b" />    								<span>Cả 2 phương án: 1 và 2</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="530" data-idquest="530" type="radio" data-stt="262" value="c" />    								<span>Drop table Khachhang</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="530" data-idquest="530" type="radio" data-stt="262" value="d" />    								<span>Delete table Khachhang</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-263" class="item-quest">
					<div class="quest-title">Câu 263 :</div>
					<div class="quest-content">
						<span>Let R(A,B,C), F = {AB→C, C→A}. What is C+? ( Cho R(A,B,C), F = {AB→C, C→A}. Bao đóng C+ là: )</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1089" data-idquest="1089" type="radio" data-stt="263" value="a" />    								<span>{C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1089" data-idquest="1089" type="radio" data-stt="263" value="b" />    								<span>{A, C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1089" data-idquest="1089" type="radio" data-stt="263" value="c" />    								<span>{A, B, C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1089" data-idquest="1089" type="radio" data-stt="263" value="d" />    								<span>{B, C}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-264" class="item-quest">
					<div class="quest-title">Câu 264 :</div>
					<div class="quest-content">
						<span>Cơ sở dữ liệu là tài nguyên thông tin chung, nghĩa là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="758" data-idquest="758" type="radio" data-stt="264" value="a" />    								<span>Nhiều người sử dụng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="758" data-idquest="758" type="radio" data-stt="264" value="b" />    								<span>Truy nhập trực tuyến.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="758" data-idquest="758" type="radio" data-stt="264" value="c" />    								<span>Nhiều người sử dụng, không phụ thuộc vị trí địa lý, có phân quyền.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="758" data-idquest="758" type="radio" data-stt="264" value="d" />    								<span>Nhiều người sử dụng, có phân quyền.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-265" class="item-quest">
					<div class="quest-title">Câu 265 :</div>
					<div class="quest-content">
						<span>Mô hình dữ liệu tốt nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="198" data-idquest="198" type="radio" data-stt="265" value="a" />    								<span>Khi thao tác dễ dàng nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="198" data-idquest="198" type="radio" data-stt="265" value="b" />    								<span>Độc lập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="198" data-idquest="198" type="radio" data-stt="265" value="c" />    								<span>Phụ thuộc vào yêu cầu truy xuất và khai thác thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="198" data-idquest="198" type="radio" data-stt="265" value="d" />    								<span>Không tổn thất thông tin</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-266" class="item-quest">
					<div class="quest-title">Câu 266 :</div>
					<div class="quest-content">
						<span>Nếu một lược đồ quan hệ có 5 thuộc tính, khóa của lược đồ gồm 3 thuộc tính. Khi đó ta sẽ có bao nhiêu siêu khóa:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="695" data-idquest="695" type="radio" data-stt="266" value="a" />    								<span>3</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="695" data-idquest="695" type="radio" data-stt="266" value="b" />    								<span>4</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="695" data-idquest="695" type="radio" data-stt="266" value="c" />    								<span>2</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="695" data-idquest="695" type="radio" data-stt="266" value="d" />    								<span>5</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-267" class="item-quest">
					<div class="quest-title">Câu 267 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E,F), F = {B→D, D→E, AE→F, C→A}. Bao đóng (BC)+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1021" data-idquest="1021" type="radio" data-stt="267" value="a" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1021" data-idquest="1021" type="radio" data-stt="267" value="b" />    								<span>{B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1021" data-idquest="1021" type="radio" data-stt="267" value="c" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1021" data-idquest="1021" type="radio" data-stt="267" value="d" />    								<span>{A, B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-268" class="item-quest">
					<div class="quest-title">Câu 268 :</div>
					<div class="quest-content">
						<span>Cho lược đồ CSDL gồm các bảng sau: KhachHang(MaKH, TenKH, ThanhPho) SanPham(MaSP, TenSP, SoLuong, DonGia) DaiLy (MaDL, TenDL, ThanhPho, HueHong) DatHang(MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien) Chọn câu lệnh SQL để giải quyết câu truy vấn sau. Liệt kê tên các sản phẩm mà có từ hai khách hàng trở lên đặt hàng.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="576" data-idquest="576" type="radio" data-stt="268" value="a" />    								<span>Select TenSP from SanPham where MaSP in (select MaSP from DatHang where MaKH = 'c01' and MaKH = 'c02');</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="576" data-idquest="576" type="radio" data-stt="268" value="b" />    								<span>Select TenSP from SanPham p, DatHang o1, DatHang o2 where p.MaSP = o1.MaSP and p.MaSP = o2.MaSP;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="576" data-idquest="576" type="radio" data-stt="268" value="c" />    								<span>Select distinct TenSP from SanPham p, DatHang o1, DatHang o2 where</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="576" data-idquest="576" type="radio" data-stt="268" value="d" />    								<span>Select TenSP from SanPham where MaSP in (select o1.MaSP from DatHang o1, DatHang o2 where o1.MaKH = 'c01' and o2.MaKH = 'c02' and o1.MaSP = o2.MaSP);</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-269" class="item-quest">
					<div class="quest-title">Câu 269 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→BC, B→D, CD→E}. Phụ thuộc hàm không tầm thường nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="944" data-idquest="944" type="radio" data-stt="269" value="a" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="944" data-idquest="944" type="radio" data-stt="269" value="b" />    								<span>B→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="944" data-idquest="944" type="radio" data-stt="269" value="c" />    								<span>E→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="944" data-idquest="944" type="radio" data-stt="269" value="d" />    								<span>D→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-270" class="item-quest">
					<div class="quest-title">Câu 270 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="803" data-idquest="803" type="radio" data-stt="270" value="a" />    								<span>A --> BC và BC --> Z thì AC -->Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="803" data-idquest="803" type="radio" data-stt="270" value="b" />    								<span>A --> BC và B --> Z thì AC -->Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="803" data-idquest="803" type="radio" data-stt="270" value="c" />    								<span>AC --> B và B --> Z thì A-->Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="803" data-idquest="803" type="radio" data-stt="270" value="d" />    								<span>A --> B và BC --> Z thì AC -->Z</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-271" class="item-quest">
					<div class="quest-title">Câu 271 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="330" data-idquest="330" type="radio" data-stt="271" value="a" />    								<span>Biểu diễn toàn bộ thông tin trong mô hình quan niệm là duy nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="330" data-idquest="330" type="radio" data-stt="271" value="b" />    								<span>Chỉ có nhiều cách nhìn dữ liệu ở mô hình quan niệm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="330" data-idquest="330" type="radio" data-stt="271" value="c" />    								<span>Mô hình quan niệm là cách nhìn dữ liệu của người sử dụng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="330" data-idquest="330" type="radio" data-stt="271" value="d" />    								<span>Mô hình dữ liệu là nội dung thông tin của người sử dụng</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-272" class="item-quest">
					<div class="quest-title">Câu 272 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Trong biểu thức quan hệ các toán hạng là ..........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="474" data-idquest="474" type="radio" data-stt="272" value="a" />    								<span>Các phụ thuộc hàm</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="474" data-idquest="474" type="radio" data-stt="272" value="b" />    								<span>Các thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="474" data-idquest="474" type="radio" data-stt="272" value="c" />    								<span>Các phần tử</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="474" data-idquest="474" type="radio" data-stt="272" value="d" />    								<span>Các quan hệ trong một CSDL</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-273" class="item-quest">
					<div class="quest-title">Câu 273 :</div>
					<div class="quest-content">
						<span>Cấu trúc của một mô hình quan hệ được định nghĩa bởi:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="531" data-idquest="531" type="radio" data-stt="273" value="a" />    								<span>Bảng, dòng và cột</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="531" data-idquest="531" type="radio" data-stt="273" value="b" />    								<span>Tất cả đều đúng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="531" data-idquest="531" type="radio" data-stt="273" value="c" />    								<span>Quan hệ, bộ và thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="531" data-idquest="531" type="radio" data-stt="273" value="d" />    								<span>Tập tin, mẫu tin và trường.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-274" class="item-quest">
					<div class="quest-title">Câu 274 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Bao đóng tập các phụ thuộc hàm gồm các phụ thuộc…</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="439" data-idquest="439" type="radio" data-stt="274" value="a" />    								<span>Bắc cầu được suy dẫn logic</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="439" data-idquest="439" type="radio" data-stt="274" value="b" />    								<span>Đầy đủ được suy dẫn logic</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="439" data-idquest="439" type="radio" data-stt="274" value="c" />    								<span>Được suy dẫn bằng cách áp dụng liên tiếp các hệ tiên đề Armstrong</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="439" data-idquest="439" type="radio" data-stt="274" value="d" />    								<span>Được suy dẫn bằng định nghĩa</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-275" class="item-quest">
					<div class="quest-title">Câu 275 :</div>
					<div class="quest-content">
						<span>Ràng buộc kiểu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="193" data-idquest="193" type="radio" data-stt="275" value="a" />    								<span>Quy tắc đặt tên cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="193" data-idquest="193" type="radio" data-stt="275" value="b" />    								<span>Mô tả tính chất của các thuộc tính khi tạo lập CSDL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="193" data-idquest="193" type="radio" data-stt="275" value="c" />    								<span>Mối quan hệ giữa các thực thể dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="193" data-idquest="193" type="radio" data-stt="275" value="d" />    								<span>Quy tắc truy nhập cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-276" class="item-quest">
					<div class="quest-title">Câu 276 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy SID của sinh viên có đăng ký '2025_Spring' nhưng KHÔNG đăng ký '2025_Fall'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="918" data-idquest="918" type="radio" data-stt="276" value="a" />    								<span>﻿πSID(σSemester=′2025_Spring′(ENROLL))∪πSID(σSemester=′2025_Fall′(ENROLL))π_{SID}(σ_{Semester='2025\_Spring'}(ENROLL)) ∪ π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))πSID​(σSemester=′2025_Spring′​(ENROLL))∪πSID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="918" data-idquest="918" type="radio" data-stt="276" value="b" />    								<span>﻿πSID(σSemester=′2025_Fall′(ENROLL))−πSID(σSemester=′2025_Spring′(ENROLL))π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL)) − π_{SID}(σ_{Semester='2025\_Spring'}(ENROLL))πSID​(σSemester=′2025_Fall′​(ENROLL))−πSID​(σSemester=′2025_Spring′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="918" data-idquest="918" type="radio" data-stt="276" value="c" />    								<span>﻿πSID(σSemester=′2025_Spring′(ENROLL))∩πSID(σSemester=′2025_Fall′(ENROLL))π_{SID}(σ_{Semester='2025\_Spring'}(ENROLL)) ∩ π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))πSID​(σSemester=′2025_Spring′​(ENROLL))∩πSID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="918" data-idquest="918" type="radio" data-stt="276" value="d" />    								<span>﻿πSID(σSemester=′2025_Spring′(ENROLL))−πSID(σSemester=′2025_Fall′(ENROLL))π_{SID}(σ_{Semester='2025\_Spring'}(ENROLL)) − π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))πSID​(σSemester=′2025_Spring′​(ENROLL))−πSID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-277" class="item-quest">
					<div class="quest-title">Câu 277 :</div>
					<div class="quest-content">
						<span>một thuộc tính nguyên tố là một thuộc tính mà:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="690" data-idquest="690" type="radio" data-stt="277" value="a" />    								<span>Là thành phần cuả một khoá ngoại</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="690" data-idquest="690" type="radio" data-stt="277" value="b" />    								<span>Là một giá trị đơn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="690" data-idquest="690" type="radio" data-stt="277" value="c" />    								<span>Là thành phần cuả ít nhất một khoá dự tuyển.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="690" data-idquest="690" type="radio" data-stt="277" value="d" />    								<span>Là thành phần cuả khoá chính.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-278" class="item-quest">
					<div class="quest-title">Câu 278 :</div>
					<div class="quest-content">
						<span>Khi thực hiện câu lệnh SQL để xóa cấu trúc của một bảng, điều gì xảy ra đối với dữ liệu chứa trong bảng đó?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="633" data-idquest="633" type="radio" data-stt="278" value="a" />    								<span>Không thể xóa được. Chỉ xóa được cấu trúc của bảng khi tất cả dữ liệu trong bảng đó đã bị xóa.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="633" data-idquest="633" type="radio" data-stt="278" value="b" />    								<span>Dữ liệu trong bảng đó cũng bị xóa theo.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="633" data-idquest="633" type="radio" data-stt="278" value="c" />    								<span>Nếu bảng bị xóa là bảng cha, thì dữ liệu sẽ được đưa vào bảng con tương ứng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="633" data-idquest="633" type="radio" data-stt="278" value="d" />    								<span>Nếu bảng bị xóa là bảng con, thì dữ liệu sẽ đưa vào bảng cha tương ứng.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-279" class="item-quest">
					<div class="quest-title">Câu 279 :</div>
					<div class="quest-content">
						<span>Để bảo vệ cơ sở dữ liệu, phải thực hiện biện pháp an toàn</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="316" data-idquest="316" type="radio" data-stt="279" value="a" />    								<span>Mạng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="316" data-idquest="316" type="radio" data-stt="279" value="b" />    								<span>An toàn hệ thống điều hành</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="316" data-idquest="316" type="radio" data-stt="279" value="c" />    								<span>Hệ thống, người quản trị cấp phép, an toàn mạng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="316" data-idquest="316" type="radio" data-stt="279" value="d" />    								<span>Người quản trị cơ sở dữ liệu cấp phép truy nhập</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-280" class="item-quest">
					<div class="quest-title">Câu 280 :</div>
					<div class="quest-content">
						<span>Mối kết hợp “Tham gia” là mối kết hợp (Hình bên)?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="657" data-idquest="657" type="radio" data-stt="280" value="a" />    								<span>1-n</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="657" data-idquest="657" type="radio" data-stt="280" value="b" />    								<span>n-n</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="657" data-idquest="657" type="radio" data-stt="280" value="c" />    								<span>n-1</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="657" data-idquest="657" type="radio" data-stt="280" value="d" />    								<span>1-1</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-281" class="item-quest">
					<div class="quest-title">Câu 281 :</div>
					<div class="quest-content">
						<span>Bao đóng của tập các thuộc tính X ứng với tập F</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="241" data-idquest="241" type="radio" data-stt="281" value="a" />    								<span>X⁺ := X ∪ {I | A → B ∈ F⁺, A ⊆ X₀, B ∉ X₀}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="241" data-idquest="241" type="radio" data-stt="281" value="b" />    								<span>X⁺ := {Y | X → Y ∈ F⁺}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="241" data-idquest="241" type="radio" data-stt="281" value="c" />    								<span>X₀ ⊆ X₁ ⊆ X₂ ⊆ ... ⊆ X_n ⊆ Xn+1 ⊆ Xn+2</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="241" data-idquest="241" type="radio" data-stt="281" value="d" />    								<span>X⁺ := X ∪ {B | A → B ∈ F⁺}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-282" class="item-quest">
					<div class="quest-title">Câu 282 :</div>
					<div class="quest-content">
						<span>Trong SQL làm thế nào để chọn tất cả các bản ghi từ bảng Persons với giá trị trong cột FirstName là Peter:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="830" data-idquest="830" type="radio" data-stt="282" value="a" />    								<span>Selet * From Persons Where FirstName is 'Peter'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="830" data-idquest="830" type="radio" data-stt="282" value="b" />    								<span>Selet [all] From Persons Where FirstName like 'Peter*'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="830" data-idquest="830" type="radio" data-stt="282" value="c" />    								<span>Selet * From Persons Where FirstName <> '*Peter*'</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="830" data-idquest="830" type="radio" data-stt="282" value="d" />    								<span>Selet * From Persons Where FirstName = 'Peter'</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-283" class="item-quest">
					<div class="quest-title">Câu 283 :</div>
					<div class="quest-content">
						<span>F = {A → B, C → X, BX → Z}</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="245" data-idquest="245" type="radio" data-stt="283" value="a" />    								<span>AC ⇌ Z⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="245" data-idquest="245" type="radio" data-stt="283" value="b" />    								<span>AC → Z ∈ F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="245" data-idquest="245" type="radio" data-stt="283" value="c" />    								<span>AC → Z</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="245" data-idquest="245" type="radio" data-stt="283" value="d" />    								<span>AC → Z ∉ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-284" class="item-quest">
					<div class="quest-title">Câu 284 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Nếu 2 bộ bất kỳ trùng nhau trên các thành phần của khóa thì ..........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="445" data-idquest="445" type="radio" data-stt="284" value="a" />    								<span>Khác nhau trên các thành phần tất cả các bộ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="445" data-idquest="445" type="radio" data-stt="284" value="b" />    								<span>Khác nhau trên các thành phần không khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="445" data-idquest="445" type="radio" data-stt="284" value="c" />    								<span>Cũng trùng nhau trên các thành phần không khóa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="445" data-idquest="445" type="radio" data-stt="284" value="d" />    								<span>Cũng trùng nhau trên các thành phần của tất cả các bộ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-285" class="item-quest">
					<div class="quest-title">Câu 285 :</div>
					<div class="quest-content">
						<span>Cho F = {T → (Y,D), M → (C,G,N), (T,M) → (L,I)}, Chọn một khẳng định đúng sau đây</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="492" data-idquest="492" type="radio" data-stt="285" value="a" />    								<span>Y, D, L là các thuộc tính khóa và (T,D)⁺ = Ω</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="492" data-idquest="492" type="radio" data-stt="285" value="b" />    								<span>T → D và D⁺ = Ω hoặc (G,L,D) → I</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="492" data-idquest="492" type="radio" data-stt="285" value="c" />    								<span>T và M là các thuộc tính khóa và (T,M)⁺ = Ω</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="492" data-idquest="492" type="radio" data-stt="285" value="d" />    								<span>T, D, M là các thuộc tính khóa và (T,D)⁺ = Ω</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-286" class="item-quest">
					<div class="quest-title">Câu 286 :</div>
					<div class="quest-content">
						<span>Khi thực hiện các phép toán trong một biểu thức quan hệ, thứ tự ưu tiên là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="310" data-idquest="310" type="radio" data-stt="286" value="a" />    								<span>Các phép toán một ngôi có thứ tự ưu tiên cao hơn so với phép toán hai ngôi</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="310" data-idquest="310" type="radio" data-stt="286" value="b" />    								<span>Phép kết nối được ưu tiên hơn so với phép chọn và chiếu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="310" data-idquest="310" type="radio" data-stt="286" value="c" />    								<span>Phụ thuộc vào vị trí của các phép toán</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="310" data-idquest="310" type="radio" data-stt="286" value="d" />    								<span>Phép kết nối được ưu tiên hơn so với phép hợp, phép giao</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-287" class="item-quest">
					<div class="quest-title">Câu 287 :</div>
					<div class="quest-content">
						<span>COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
CLUB(ClubID, ClubName): Chứa thông tin câu lạc bộ, (giả sử ClubName là duy nhất).
MEMBER(SID, ClubID): Chứa thông tin thành viên của các câu lạc bộ. SID tham chiếu tới SID của STUDENT, ClubID tham chiếu thới ClubID của CLUB
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy Name của sinh viên vừa là thành viên CLB nào đó vừa có đăng ký học kỳ '2025_Fall'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="915" data-idquest="915" type="radio" data-stt="287" value="a" />    								<span>﻿πName(STUDENT)−πName(STUDENT⋈πSID(MEMBER))π_{Name}(STUDENT) − π_{Name}(STUDENT ⋈ π_{SID}(MEMBER))πName​(STUDENT)−πName​(STUDENT⋈πSID​(MEMBER))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="915" data-idquest="915" type="radio" data-stt="287" value="b" />    								<span>﻿πName(STUDENT⋈(πSID(MEMBER)∩πSID(σSemester=′2025_Fall′(ENROLL))))π_{Name}(STUDENT ⋈ (π_{SID}(MEMBER) ∩ π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))))πName​(STUDENT⋈(πSID​(MEMBER)∩πSID​(σSemester=′2025_Fall′​(ENROLL))))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="915" data-idquest="915" type="radio" data-stt="287" value="c" />    								<span>﻿πName(σSemester=′2025_Fall′(STUDENT⋈MEMBER))π_{Name}(σ_{Semester='2025\_Fall'}(STUDENT ⋈ MEMBER))πName​(σSemester=′2025_Fall′​(STUDENT⋈MEMBER))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="915" data-idquest="915" type="radio" data-stt="287" value="d" />    								<span>﻿πName(STUDENT⋈(πClubID(MEMBER)∩πSID(σSemester=′2025_Fall′(ENROLL))))π_{Name}(STUDENT ⋈ (π_{ClubID}(MEMBER) ∩ π_{SID}(σ_{Semester='2025\_Fall'}(ENROLL))))πName​(STUDENT⋈(πClubID​(MEMBER)∩πSID​(σSemester=′2025_Fall′​(ENROLL))))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-288" class="item-quest">
					<div class="quest-title">Câu 288 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi xác định các thuộc tính dư thừa trong phụ thuộc A₁A₂A₃...A_n → B ∈ F</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="366" data-idquest="366" type="radio" data-stt="288" value="a" />    								<span>Kiểm tra B ⊆ (A₁A₂...Ai-1Ai+1...A_n)⁺, i = 1 ÷ n</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="366" data-idquest="366" type="radio" data-stt="288" value="b" />    								<span>Loại bỏ tạm thời A_i, i = 1 ÷ n kiểm tra (A₁A₂...Ai-1Ai+1...A_n → B) ∉ F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="366" data-idquest="366" type="radio" data-stt="288" value="c" />    								<span>Kiểm tra (A₁A₂...Ai-1Ai+1...A_n → B) ∈ F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="366" data-idquest="366" type="radio" data-stt="288" value="d" />    								<span>Kiểm tra (A₁A₂...Ai-1Ai+1...A_n)⁺ ⊆ B, i = 1 ÷ n</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-289" class="item-quest">
					<div class="quest-title">Câu 289 :</div>
					<div class="quest-content">
						<span>Thực thể được biểu diễn trong lược đồ ERD thông qua:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="821" data-idquest="821" type="radio" data-stt="289" value="a" />    								<span>Hình chữ nhật</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="821" data-idquest="821" type="radio" data-stt="289" value="b" />    								<span>Hình tam giác</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="821" data-idquest="821" type="radio" data-stt="289" value="c" />    								<span>Hình elip</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="821" data-idquest="821" type="radio" data-stt="289" value="d" />    								<span>Hình thoi</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-290" class="item-quest">
					<div class="quest-title">Câu 290 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(W,B,F,K,A) với tập phụ thuộc hàm F={WB->F, FK->A, F->W, A->K}. Bao đóng của tập thuộc tính {W, B, A} đối với F là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="600" data-idquest="600" type="radio" data-stt="290" value="a" />    								<span>{W B F K A}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="600" data-idquest="600" type="radio" data-stt="290" value="b" />    								<span>{W B A}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="600" data-idquest="600" type="radio" data-stt="290" value="c" />    								<span>{W B A F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="600" data-idquest="600" type="radio" data-stt="290" value="d" />    								<span>{W B A K}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-291" class="item-quest">
					<div class="quest-title">Câu 291 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Biến đổi một quan hệ chưa chuẩn hoá về nhóm các quan hệ 3NF ..........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="456" data-idquest="456" type="radio" data-stt="291" value="a" />    								<span>Không tổn thất thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="456" data-idquest="456" type="radio" data-stt="291" value="b" />    								<span>Bảo đảm tính độc lập dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="456" data-idquest="456" type="radio" data-stt="291" value="c" />    								<span>Tổn thất thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="456" data-idquest="456" type="radio" data-stt="291" value="d" />    								<span>Bảo toàn phụ thuộc</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-292" class="item-quest">
					<div class="quest-title">Câu 292 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D), F = {A→B, B→C, C→A}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="911" data-idquest="911" type="radio" data-stt="292" value="a" />    								<span>3NF (nhưng không phải BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="911" data-idquest="911" type="radio" data-stt="292" value="b" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="911" data-idquest="911" type="radio" data-stt="292" value="c" />    								<span>2NF (nhưng không phải 3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="911" data-idquest="911" type="radio" data-stt="292" value="d" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-293" class="item-quest">
					<div class="quest-title">Câu 293 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="368" data-idquest="368" type="radio" data-stt="293" value="a" />    								<span>Phụ thuộc dư thừa có thể là phụ thuộc có vế trái dư thừa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="368" data-idquest="368" type="radio" data-stt="293" value="b" />    								<span>Phụ thuộc dư thừa là phụ thuộc có vế trái dư thừa</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="368" data-idquest="368" type="radio" data-stt="293" value="c" />    								<span>Phụ thuộc có vế trái dư thừa là phụ thuộc bắc cầu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="368" data-idquest="368" type="radio" data-stt="293" value="d" />    								<span>Phụ thuộc có vế trái dư thừa là phụ thuộc đầy đủ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-294" class="item-quest">
					<div class="quest-title">Câu 294 :</div>
					<div class="quest-content">
						<span>Mô hình thực thể - liên kết cơ bản bao gồm các lớp đối tượng:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="780" data-idquest="780" type="radio" data-stt="294" value="a" />    								<span>Thực thể, mối quan hệ và thuộc tính.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="780" data-idquest="780" type="radio" data-stt="294" value="b" />    								<span>Môi trường và ranh giới môi trường</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="780" data-idquest="780" type="radio" data-stt="294" value="c" />    								<span>Các mối quan hệ.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="780" data-idquest="780" type="radio" data-stt="294" value="d" />    								<span>Thực thể và thuộc tính.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-295" class="item-quest">
					<div class="quest-title">Câu 295 :</div>
					<div class="quest-content">
						<span>F={A→B, C→D}. Tính (AC)⁺.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1194" data-idquest="1194" type="radio" data-stt="295" value="a" />    								<span>{A,C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1194" data-idquest="1194" type="radio" data-stt="295" value="b" />    								<span>{B,C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1194" data-idquest="1194" type="radio" data-stt="295" value="c" />    								<span>{A,C,D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1194" data-idquest="1194" type="radio" data-stt="295" value="d" />    								<span>{A,B,C,D}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-296" class="item-quest">
					<div class="quest-title">Câu 296 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→B, BC→D, D→E}. Khóa ứng viên (khoá dự bị) của R là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="888" data-idquest="888" type="radio" data-stt="296" value="a" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="888" data-idquest="888" type="radio" data-stt="296" value="b" />    								<span>AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="888" data-idquest="888" type="radio" data-stt="296" value="c" />    								<span>AD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="888" data-idquest="888" type="radio" data-stt="296" value="d" />    								<span>BC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-297" class="item-quest">
					<div class="quest-title">Câu 297 :</div>
					<div class="quest-content">
						<span>Đáp án nào dưới đây không phải là một hàm tổng hợp hợp lệ?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="851" data-idquest="851" type="radio" data-stt="297" value="a" />    								<span>SUM</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="851" data-idquest="851" type="radio" data-stt="297" value="b" />    								<span>COUNT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="851" data-idquest="851" type="radio" data-stt="297" value="c" />    								<span>MAX</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="851" data-idquest="851" type="radio" data-stt="297" value="d" />    								<span>COMPUTE</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-298" class="item-quest">
					<div class="quest-title">Câu 298 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(V,Z,W,Y,F) với tập phụ thuộc hàm F={UX->VB, X->N, N->U}. Phụ thuộc hàm nào sau đây không được suy diễn từ F:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="599" data-idquest="599" type="radio" data-stt="298" value="a" />    								<span>VY->WZ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="599" data-idquest="599" type="radio" data-stt="298" value="b" />    								<span>ZW->YF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="599" data-idquest="599" type="radio" data-stt="298" value="c" />    								<span>Z->F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="599" data-idquest="599" type="radio" data-stt="298" value="d" />    								<span>VZ->V</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-299" class="item-quest">
					<div class="quest-title">Câu 299 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Lấy CID của các môn thuộc Dept='CS' hoặc Dept='SE' mà không có đăng ký trong '2025_Fall'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1032" data-idquest="1032" type="radio" data-stt="299" value="a" />    								<span>﻿πCID(σDept=′CS′∨Dept=′SE′(COURSE⋈ENROLL))−πCID(σSemester=′2025_Fall′(ENROLL))π_{CID}(σ_{Dept='CS' ∨ Dept='SE'}(COURSE ⋈ ENROLL)) − π_{CID}(σ_{Semester='2025\_Fall'}(ENROLL))πCID​(σDept=′CS′∨Dept=′SE′​(COURSE⋈ENROLL))−πCID​(σSemester=′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1032" data-idquest="1032" type="radio" data-stt="299" value="b" />    								<span>﻿πCID(σDept=′CS′∨Dept=′SE′(COURSE))−πCID(σSemester=′2025_Fall′∧(Dept=′CS′∨Dept=′SE′)(COURSE⋈ENROLL))π_{CID}(σ_{Dept='CS' ∨ Dept='SE'}(COURSE)) − π_{CID}(σ_{Semester='2025\_Fall' ∧ (Dept='CS' ∨ Dept='SE')}(COURSE ⋈ ENROLL))πCID​(σDept=′CS′∨Dept=′SE′​(COURSE))−πCID​(σSemester=′2025_Fall′∧(Dept=′CS′∨Dept=′SE′)​(COURSE⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1032" data-idquest="1032" type="radio" data-stt="299" value="c" />    								<span>﻿πCID(σDept=′CS′∨Dept=′SE′(COURSE))∩πCID(σSemester<>′2025_Fall′(ENROLL))π_{CID}(σ_{Dept='CS' ∨ Dept='SE'}(COURSE)) ∩ π_{CID}(σ_{Semester<>'2025\_Fall'}(ENROLL))πCID​(σDept=′CS′∨Dept=′SE′​(COURSE))∩πCID​(σSemester<>′2025_Fall′​(ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1032" data-idquest="1032" type="radio" data-stt="299" value="d" />    								<span>﻿πCID(σSemester=′2025_Fall′(ENROLL))−πCID(σDept=′CS′∨Dept=′SE′(COURSE))π_{CID}(σ_{Semester='2025\_Fall'}(ENROLL)) − π_{CID}(σ_{Dept='CS' ∨ Dept='SE'}(COURSE))πCID​(σSemester=′2025_Fall′​(ENROLL))−πCID​(σDept=′CS′∨Dept=′SE′​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-300" class="item-quest">
					<div class="quest-title">Câu 300 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ gồm: NhaCungCap(MaNCC,TenNCC,ThanhPho) HangHoa(MaHang,TenHang,MauSac) CungUng(MaNCC,MaHang,SoLuong) Tạo câu truy vấn SQL để tính tổng số lượng của từng sản phẩm đã cung ứng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="581" data-idquest="581" type="radio" data-stt="300" value="a" />    								<span>Select MaHang,SoLuong From CungUng;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="581" data-idquest="581" type="radio" data-stt="300" value="b" />    								<span>Select MaHang,sum(SoLuong) From CungUng Group By MaHang;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="581" data-idquest="581" type="radio" data-stt="300" value="c" />    								<span>Select MaNCC, MaHang, sum(SoLuong) From HangHoa H, CungUng C Where H.MaHang = C.MaHang Group by MaNCC, MaHang;</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="581" data-idquest="581" type="radio" data-stt="300" value="d" />    								<span>Select sum(SoLuong) From CungUng;</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-301" class="item-quest">
					<div class="quest-title">Câu 301 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về tính nhất quán và tính toàn vẹn của dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="325" data-idquest="325" type="radio" data-stt="301" value="a" />    								<span>Tiết kiệm bộ nhớ và các thiết bị lưu trữ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="325" data-idquest="325" type="radio" data-stt="301" value="b" />    								<span>Tránh dư thừa dữ liệu trong lưu trữ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="325" data-idquest="325" type="radio" data-stt="301" value="c" />    								<span>Một thuộc tính được mô tả lặp lại nhiều lần</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="325" data-idquest="325" type="radio" data-stt="301" value="d" />    								<span>Tránh được dị thường thông tin</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-302" class="item-quest">
					<div class="quest-title">Câu 302 :</div>
					<div class="quest-content">
						<span>Author has a multivalued attribute Education (composite: Degree, University, Year). Author writes Book (N-N relationship), the relationship has a multivalued attribute Contribution (Role, Percentage). The correct mapping to the relational model is: ( Author có thuộc tính đa trị Education (composite: Degree, University, Year). Author viết Book (N-N), quan hệ có thuộc tính đa trị Contribution (Role, Percentage). Ánh xạ đúng sang mô hình quan hệ là: )</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1070" data-idquest="1070" type="radio" data-stt="302" value="a" />    								<span>AUTHOR(AuthorID PK, Name, Education TEXT)
BOOK(BookID PK, Title)
WRITES(AuthorID FK, BookID FK, Contributions TEXT, PK(AuthorID, BookID))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1070" data-idquest="1070" type="radio" data-stt="302" value="b" />    								<span>AUTHOR(AuthorID PK, Name)
EDUCATION(Degree, University, Year, AuthorID FK, PK(Degree, University, Year))
BOOK(BookID PK, Title)
WRITES(AuthorID FK, BookID FK, PK(AuthorID, BookID))
CONTRIBUTION(Role, Percentage, AuthorID FK, BookID FK, PK(Role))</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1070" data-idquest="1070" type="radio" data-stt="302" value="c" />    								<span>AUTHOR(AuthorID PK, Name)
AUTHOR_EDUCATION(AuthorID FK, Degree, University, Year, PK(AuthorID, Degree, University))
BOOK(BookID PK, Title)
WRITES(AuthorID FK, BookID FK, Role, Percentage, PK(AuthorID, BookID, Role), FK(AuthorID,BookID) forms composite)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1070" data-idquest="1070" type="radio" data-stt="302" value="d" />    								<span>AUTHOR(AuthorID PK, Name)
AUTHOR_EDUCATION(AuthorID FK, Degree, University, Year, PK(AuthorID, Degree, University))
BOOK(BookID PK, Title)
WRITES(AuthorID FK, BookID FK, PK(AuthorID, BookID))
CONTRIBUTION(AuthorID FK, BookID FK, Role, Percentage, PK(AuthorID, BookID, Role))</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-303" class="item-quest">
					<div class="quest-title">Câu 303 :</div>
					<div class="quest-content">
						<span>X → Y ∈ F là phụ thuộc hàm không đầy đủ khi và chỉ khi</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="239" data-idquest="239" type="radio" data-stt="303" value="a" />    								<span>∀ A' ⊂ A suy ra A' → B ∈ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="239" data-idquest="239" type="radio" data-stt="303" value="b" />    								<span>∀ A' ⊂ A suy ra A' → B ∉ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="239" data-idquest="239" type="radio" data-stt="303" value="c" />    								<span>∃ A' ⊂ A suy ra A' → B ∉ F⁺</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="239" data-idquest="239" type="radio" data-stt="303" value="d" />    								<span>∃ A' ⊂ A suy ra A' → B ∈ F⁺</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-304" class="item-quest">
					<div class="quest-title">Câu 304 :</div>
					<div class="quest-content">
						<span>Ngôn ngữ thao tác dữ liệu là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="276" data-idquest="276" type="radio" data-stt="304" value="a" />    								<span>Một tập các phép toán dùng để thao tác trên các hệ cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="276" data-idquest="276" type="radio" data-stt="304" value="b" />    								<span>Một tập các phép toán dùng để cập nhật, bổ sung trên các hệ cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="276" data-idquest="276" type="radio" data-stt="304" value="c" />    								<span>Một tập các quy tắc biểu diễn dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="276" data-idquest="276" type="radio" data-stt="304" value="d" />    								<span>Một tập các ký hiệu biểu diễn dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-305" class="item-quest">
					<div class="quest-title">Câu 305 :</div>
					<div class="quest-content">
						<span>Mệnh đề SQL nào được dùng để trích xuất dữ liệu từ cơ sở dữ liệu</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="826" data-idquest="826" type="radio" data-stt="305" value="a" />    								<span>Select</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="826" data-idquest="826" type="radio" data-stt="305" value="b" />    								<span>Open</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="826" data-idquest="826" type="radio" data-stt="305" value="c" />    								<span>Get</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="826" data-idquest="826" type="radio" data-stt="305" value="d" />    								<span>Extract</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-306" class="item-quest">
					<div class="quest-title">Câu 306 :</div>
					<div class="quest-content">
						<span>Một kết hợp giữa các thực thể được gọi là một _____.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="677" data-idquest="677" type="radio" data-stt="306" value="a" />    								<span>Ràng buộc về tính nguyên vẹn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="677" data-idquest="677" type="radio" data-stt="306" value="b" />    								<span>File dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="677" data-idquest="677" type="radio" data-stt="306" value="c" />    								<span>mối quan hệ</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="677" data-idquest="677" type="radio" data-stt="306" value="d" />    								<span>Cơ sở dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-307" class="item-quest">
					<div class="quest-title">Câu 307 :</div>
					<div class="quest-content">
						<span>cho biết ý nghĩa của đoạn mã lệnh sau: select * From ds Where hoten Like "H_"</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="814" data-idquest="814" type="radio" data-stt="307" value="a" />    								<span>Hiện tất cả những thí sinh trong bảng ds có hoten chỉ có chữ H</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="814" data-idquest="814" type="radio" data-stt="307" value="b" />    								<span>Hiện tất cả những thí sinh trong bảng ds </span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="814" data-idquest="814" type="radio" data-stt="307" value="c" />    								<span>Hiện tất cả những thí sinh trong bảng ds có hoten chứa chữ H</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="814" data-idquest="814" type="radio" data-stt="307" value="d" />    								<span>Hiện tất cả những thí sinh trong bảng ds có hoten bắt đầu bằng chữ H</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-308" class="item-quest">
					<div class="quest-title">Câu 308 :</div>
					<div class="quest-content">
						<span>Cho quan hệ R gồm các thuộc tính: Num mã thuê bao, TB tên thuê bao, SDT số điện thoại, DC điạ chỉ. Chọn câu đúng sau đây khi tính tổng có bao nhiêu thuê bao trên “Đường Nguyễn Trãi”</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="810" data-idquest="810" type="radio" data-stt="308" value="a" />    								<span>SELECT COUNT( *) FROM R WHERE DC = “Đường Nguyễn Trãi”</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="810" data-idquest="810" type="radio" data-stt="308" value="b" />    								<span>SELECT * FROM R WHERE DC = “Đường Nguyễn Trãi”</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="810" data-idquest="810" type="radio" data-stt="308" value="c" />    								<span>SELECT * FROM R GROUP BY TB HAVING DC = “Đường Nguyễn Trãi”</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="810" data-idquest="810" type="radio" data-stt="308" value="d" />    								<span>SELECT * FROM R</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-309" class="item-quest">
					<div class="quest-title">Câu 309 :</div>
					<div class="quest-content">
						<span>Mất thông tin khi xóa bản ghi phụ thuộc trong trường hợp</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="204" data-idquest="204" type="radio" data-stt="309" value="a" />    								<span>Xóa tất cả các bản ghi phụ thuộc</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="204" data-idquest="204" type="radio" data-stt="309" value="b" />    								<span>Xóa bản ghi phụ thuộc duy nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="204" data-idquest="204" type="radio" data-stt="309" value="c" />    								<span>Xóa cấu trúc cây phân cấp</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="204" data-idquest="204" type="radio" data-stt="309" value="d" />    								<span>Xóa bản ghi gốc</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-310" class="item-quest">
					<div class="quest-title">Câu 310 :</div>
					<div class="quest-content">
						<span>Với R(A,B) và S(B), biểu thức trả về các bộ của R không có B khớp trong S :</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1181" data-idquest="1181" type="radio" data-stt="310" value="a" />    								<span>π_A(R) − π_A(S)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1181" data-idquest="1181" type="radio" data-stt="310" value="b" />    								<span>R − π_{A,B}(R ⋈ S)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1181" data-idquest="1181" type="radio" data-stt="310" value="c" />    								<span>σ_{B ∉ S}(R)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1181" data-idquest="1181" type="radio" data-stt="310" value="d" />    								<span>R ÷ S</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-311" class="item-quest">
					<div class="quest-title">Câu 311 :</div>
					<div class="quest-content">
						<span>Mục tiêu của chuẩn hóa dữ liệu là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="261" data-idquest="261" type="radio" data-stt="311" value="a" />    								<span>Triệt tiêu mức cao nhất khả năng xuất hiện các dị thường thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="261" data-idquest="261" type="radio" data-stt="311" value="b" />    								<span>Đảm bảo tính bảo mật dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="261" data-idquest="261" type="radio" data-stt="311" value="c" />    								<span>Đảm bảo tính nhất quán dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="261" data-idquest="261" type="radio" data-stt="311" value="d" />    								<span>Đảm bảo cho việc lưu trữ dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-312" class="item-quest">
					<div class="quest-title">Câu 312 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: F là tập các phụ thuộc hàm. Khi đó bao đóng của X ứng với tập F là...........</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="441" data-idquest="441" type="radio" data-stt="312" value="a" />    								<span>X⁺ := {A ∩ B | A → B ∈ F⁺}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="441" data-idquest="441" type="radio" data-stt="312" value="b" />    								<span>X⁺ := {B | A → B ∈ F⁺}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="441" data-idquest="441" type="radio" data-stt="312" value="c" />    								<span>X⁺ := {A | A → B ∈ F⁺}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="441" data-idquest="441" type="radio" data-stt="312" value="d" />    								<span>X⁺ := {A ∩ B | A → B ∈ F⁺}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-313" class="item-quest">
					<div class="quest-title">Câu 313 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C), F = {AB→C, C→A}. Một khóa ứng viên của R là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1098" data-idquest="1098" type="radio" data-stt="313" value="a" />    								<span>B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1098" data-idquest="1098" type="radio" data-stt="313" value="b" />    								<span>AB</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1098" data-idquest="1098" type="radio" data-stt="313" value="c" />    								<span>AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1098" data-idquest="1098" type="radio" data-stt="313" value="d" />    								<span>C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-314" class="item-quest">
					<div class="quest-title">Câu 314 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ R(A,B,C,D) và tập phụ thuộc hàm F={AB->C,D->B,C->ABD}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="743" data-idquest="743" type="radio" data-stt="314" value="a" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="743" data-idquest="743" type="radio" data-stt="314" value="b" />    								<span>Dạng chuẩn Boyce-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="743" data-idquest="743" type="radio" data-stt="314" value="c" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="743" data-idquest="743" type="radio" data-stt="314" value="d" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-315" class="item-quest">
					<div class="quest-title">Câu 315 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→BC, C→D, D→E}. Phân rã nào sau đây là đúng về BCNF (lossless) và bảo toàn phụ thuộc hàm?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="885" data-idquest="885" type="radio" data-stt="315" value="a" />    								<span>{R1(A,B,C), R2(C,D,E)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="885" data-idquest="885" type="radio" data-stt="315" value="b" />    								<span>{R1(A,B,C), R2(C,D), R3(C,E)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="885" data-idquest="885" type="radio" data-stt="315" value="c" />    								<span>{R1(A,B,C,D), R2(D,E)}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="885" data-idquest="885" type="radio" data-stt="315" value="d" />    								<span>{R1(D,E), R2(C,D), R3(A,B,C)}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-316" class="item-quest">
					<div class="quest-title">Câu 316 :</div>
					<div class="quest-content">
						<span>Loại dữ liệu nào là loại dữ liệu không hợp lệ trong ngôn ngữ SQL?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="848" data-idquest="848" type="radio" data-stt="316" value="a" />    								<span>FLOAT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="848" data-idquest="848" type="radio" data-stt="316" value="b" />    								<span>NUMERIC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="848" data-idquest="848" type="radio" data-stt="316" value="c" />    								<span>DECIMAL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="848" data-idquest="848" type="radio" data-stt="316" value="d" />    								<span>CHARACTER</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-317" class="item-quest">
					<div class="quest-title">Câu 317 :</div>
					<div class="quest-content">
						<span>R(A,B,C,D,E,F), F={AC→D, D→E, E→B, B→F}. Bao đóng (AC)+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="874" data-idquest="874" type="radio" data-stt="317" value="a" />    								<span>{A, C, D, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="874" data-idquest="874" type="radio" data-stt="317" value="b" />    								<span>{A, C}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="874" data-idquest="874" type="radio" data-stt="317" value="c" />    								<span>{A, C, D, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="874" data-idquest="874" type="radio" data-stt="317" value="d" />    								<span>{A, B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-318" class="item-quest">
					<div class="quest-title">Câu 318 :</div>
					<div class="quest-content">
						<span>cho hai quan hệ C (N, W) và A (W, D) và các câu query sau: P: SELECT N FROM C, A WHERE C.W=A.W; và T: SELECT N FROM C WHERE W in (SELECT W From A); Câu nào sau đây là đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="570" data-idquest="570" type="radio" data-stt="318" value="a" />    								<span>Kết quả cuả T luôn luôn chứa kết quả cuả P.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="570" data-idquest="570" type="radio" data-stt="318" value="b" />    								<span>Kết quả cuả P luôn luôn chứa kết quả cuả T.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="570" data-idquest="570" type="radio" data-stt="318" value="c" />    								<span>P và T trả về kết quả khác nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="570" data-idquest="570" type="radio" data-stt="318" value="d" />    								<span>P và T trả về kết quả như nhau.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-319" class="item-quest">
					<div class="quest-title">Câu 319 :</div>
					<div class="quest-content">
						<span>R(A,B,C), F={A→B, B→C}. Dạng chuẩn cao nhất của R là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1174" data-idquest="1174" type="radio" data-stt="319" value="a" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1174" data-idquest="1174" type="radio" data-stt="319" value="b" />    								<span>3NF nhưng không BCNF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1174" data-idquest="1174" type="radio" data-stt="319" value="c" />    								<span>1NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1174" data-idquest="1174" type="radio" data-stt="319" value="d" />    								<span>2NF nhưng không 3NF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-320" class="item-quest">
					<div class="quest-title">Câu 320 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→B, B→C, A→C, C→D, D→E}. Phụ thuộc hàm nào dư thừa?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1037" data-idquest="1037" type="radio" data-stt="320" value="a" />    								<span>C→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1037" data-idquest="1037" type="radio" data-stt="320" value="b" />    								<span>A→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1037" data-idquest="1037" type="radio" data-stt="320" value="c" />    								<span>B→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1037" data-idquest="1037" type="radio" data-stt="320" value="d" />    								<span>A→C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-321" class="item-quest">
					<div class="quest-title">Câu 321 :</div>
					<div class="quest-content">
						<span>Câu lệnh để tìm số lượng giá trị trong cột?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="844" data-idquest="844" type="radio" data-stt="321" value="a" />    								<span>TOTAL</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="844" data-idquest="844" type="radio" data-stt="321" value="b" />    								<span>COUNT</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="844" data-idquest="844" type="radio" data-stt="321" value="c" />    								<span>ADD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="844" data-idquest="844" type="radio" data-stt="321" value="d" />    								<span>SUM</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-322" class="item-quest">
					<div class="quest-title">Câu 322 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Hợp các quan hệ khả hợp trên cùng tập các thuộc tính A là một quan hệ trên A, các bộ là .......... bỏ đi các bộ trùng nhau, chỉ giữ lại những bộ đại diện.  </span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="460" data-idquest="460" type="radio" data-stt="322" value="a" />    								<span>Các bộ của các quan hệ nguồn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="460" data-idquest="460" type="radio" data-stt="322" value="b" />    								<span>Các bộ của các quan hệ nguồn được tách không tổn thất thông tin</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="460" data-idquest="460" type="radio" data-stt="322" value="c" />    								<span>Các bộ có mặt trong các quan hệ nguồn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="460" data-idquest="460" type="radio" data-stt="322" value="d" />    								<span>Các bộ của các quan hệ nguồn thỏa điều kiện hợp</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-323" class="item-quest">
					<div class="quest-title">Câu 323 :</div>
					<div class="quest-content">
						<span>F={A→B, B→C}. Mệnh đề suy ra đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1157" data-idquest="1157" type="radio" data-stt="323" value="a" />    								<span>A→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1157" data-idquest="1157" type="radio" data-stt="323" value="b" />    								<span>C→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1157" data-idquest="1157" type="radio" data-stt="323" value="c" />    								<span>C→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1157" data-idquest="1157" type="radio" data-stt="323" value="d" />    								<span>AB↛C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-324" class="item-quest">
					<div class="quest-title">Câu 324 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {A→B, BC→D, D→E}. Phụ thuộc hàm nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1038" data-idquest="1038" type="radio" data-stt="324" value="a" />    								<span>AC→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1038" data-idquest="1038" type="radio" data-stt="324" value="b" />    								<span>C→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1038" data-idquest="1038" type="radio" data-stt="324" value="c" />    								<span>AB→E</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1038" data-idquest="1038" type="radio" data-stt="324" value="d" />    								<span>A→E</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-325" class="item-quest">
					<div class="quest-title">Câu 325 :</div>
					<div class="quest-content">
						<span>Dữ liệu trong mô hình quan hệ</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="217" data-idquest="217" type="radio" data-stt="325" value="a" />    								<span>Được biểu diễn nhiều kiểu khác nhau</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="217" data-idquest="217" type="radio" data-stt="325" value="b" />    								<span>Được biểu diễn theo cấu trúc hình cây</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="217" data-idquest="217" type="radio" data-stt="325" value="c" />    								<span>Được biểu diễn theo cấu trúc mô hình mạng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="217" data-idquest="217" type="radio" data-stt="325" value="d" />    								<span>Được biểu diễn một cách duy nhất</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-326" class="item-quest">
					<div class="quest-title">Câu 326 :</div>
					<div class="quest-content">
						<span>Phụ thuộc X → Y ∈ F là phụ thuộc dư thừa, khi và chỉ khi</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="247" data-idquest="247" type="radio" data-stt="326" value="a" />    								<span>X → Y không suy dẫn logic từ tập các phụ thuộc G := F - {X → Y}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="247" data-idquest="247" type="radio" data-stt="326" value="b" />    								<span>X → Y không suy dẫn logic từ tập các phụ thuộc F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="247" data-idquest="247" type="radio" data-stt="326" value="c" />    								<span>X → Y được suy dẫn logic từ tập các phụ thuộc F</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="247" data-idquest="247" type="radio" data-stt="326" value="d" />    								<span>X → Y được suy dẫn logic từ tập các phụ thuộc G := F - {X → Y}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-327" class="item-quest">
					<div class="quest-title">Câu 327 :</div>
					<div class="quest-content">
						<span>F={AB→C, C→A}. Phụ thuộc nào suy ra được?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1141" data-idquest="1141" type="radio" data-stt="327" value="a" />    								<span>AB→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1141" data-idquest="1141" type="radio" data-stt="327" value="b" />    								<span>B→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1141" data-idquest="1141" type="radio" data-stt="327" value="c" />    								<span>A→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1141" data-idquest="1141" type="radio" data-stt="327" value="d" />    								<span>C→B</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-328" class="item-quest">
					<div class="quest-title">Câu 328 :</div>
					<div class="quest-content">
						<span>Không có mệnh đề Where trong một câu lệnh Delete có ảnh hưởng gì?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="636" data-idquest="636" type="radio" data-stt="328" value="a" />    								<span>Câu lệnh Delete sẽ lỗi do sai cú pháp.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="636" data-idquest="636" type="radio" data-stt="328" value="b" />    								<span>Câu lệnh Delete sẽ thông báo cho người sử dụng nhập điều kiện để xóa.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="636" data-idquest="636" type="radio" data-stt="328" value="c" />    								<span>Câu lệnh Delete sẽ xóa tất cả các mẩu tin trong bảng.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="636" data-idquest="636" type="radio" data-stt="328" value="d" />    								<span>Câu lệnh Delete sẽ lỗi do không có dòng nào được xóa.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-329" class="item-quest">
					<div class="quest-title">Câu 329 :</div>
					<div class="quest-content">
						<span>STUDENT(SID, Name, Major, GPA): Chứa thông tin sinh viên.
COURSE(CID, Title, Dept, Credits): Chứa thông tin môn học.
ENROLL(SID, CID, Semester, Grade): Chứa thông tin đăng ký môn học của sinh viên. SID tham chiếu SID của STUDENT, CID tham chiếu tới CID của COURSE. Giả sử Title là duy nhất, lấy Name của sinh viên đã đăng ký môn 'Database' nhưng KHÔNG đăng ký môn 'AI'.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="989" data-idquest="989" type="radio" data-stt="329" value="a" />    								<span>﻿πName(STUDENT)−πName(STUDENT⋈πSID(ENROLL⋈σTitle=′Database′(COURSE)))π_{Name}(STUDENT) − π_{Name}(STUDENT ⋈ π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)))πName​(STUDENT)−πName​(STUDENT⋈πSID​(ENROLL⋈σTitle=′Database′​(COURSE)))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="989" data-idquest="989" type="radio" data-stt="329" value="b" />    								<span>﻿πName(STUDENT⋈(πSID(ENROLL⋈σTitle=′Database′(COURSE))∪πSID(ENROLL⋈σTitle=′AI′(COURSE))))π_{Name}(STUDENT ⋈ (π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∪ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))))πName​(STUDENT⋈(πSID​(ENROLL⋈σTitle=′Database′​(COURSE))∪πSID​(ENROLL⋈σTitle=′AI′​(COURSE))))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="989" data-idquest="989" type="radio" data-stt="329" value="c" />    								<span>﻿πName(STUDENT⋈(πSID(ENROLL⋈σTitle=′Database′(COURSE))−πSID(ENROLL⋈σTitle=′AI′(COURSE))))π_{Name}(STUDENT ⋈ (π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) − π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))))πName​(STUDENT⋈(πSID​(ENROLL⋈σTitle=′Database′​(COURSE))−πSID​(ENROLL⋈σTitle=′AI′​(COURSE))))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="989" data-idquest="989" type="radio" data-stt="329" value="d" />    								<span>﻿πName(STUDENT⋈(πSID(ENROLL⋈σTitle=′Database′(COURSE))∩πSID(ENROLL⋈σTitle=′AI′(COURSE))))π_{Name}(STUDENT ⋈ (π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))))πName​(STUDENT⋈(πSID​(ENROLL⋈σTitle=′Database′​(COURSE))∩πSID​(ENROLL⋈σTitle=′AI′​(COURSE))))﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-330" class="item-quest">
					<div class="quest-title">Câu 330 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E,F), F = {A→BC, C→D, BD→E, E→F}. Bao đóng A+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="953" data-idquest="953" type="radio" data-stt="330" value="a" />    								<span>{A, B, C, D, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="953" data-idquest="953" type="radio" data-stt="330" value="b" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="953" data-idquest="953" type="radio" data-stt="330" value="c" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="953" data-idquest="953" type="radio" data-stt="330" value="d" />    								<span>{A, B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-331" class="item-quest">
					<div class="quest-title">Câu 331 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {CD→E, E→A, A→B}. Khóa ứng viên ( khoá dự bị) của R là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="863" data-idquest="863" type="radio" data-stt="331" value="a" />    								<span>BD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="863" data-idquest="863" type="radio" data-stt="331" value="b" />    								<span>AD</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="863" data-idquest="863" type="radio" data-stt="331" value="c" />    								<span>CE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="863" data-idquest="863" type="radio" data-stt="331" value="d" />    								<span>CD</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-332" class="item-quest">
					<div class="quest-title">Câu 332 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E), F = {AB→C, C→D, D→E, E→C}. Giả sử R ở 1NF. Dạng chuẩn cao nhất là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="936" data-idquest="936" type="radio" data-stt="332" value="a" />    								<span>3NF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="936" data-idquest="936" type="radio" data-stt="332" value="b" />    								<span>BCNF</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="936" data-idquest="936" type="radio" data-stt="332" value="c" />    								<span>2NF (nhưng không phải 3NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="936" data-idquest="936" type="radio" data-stt="332" value="d" />    								<span>chỉ 1NF</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-333" class="item-quest">
					<div class="quest-title">Câu 333 :</div>
					<div class="quest-content">
						<span>Cho quan hệ STUDENT(SID, Name, Major, GPA) lưu trữ thông tin của sinh viên, COURSE(CID, Title, Dept) lưu trữ thông tin môn học, ENROLL(SID, CID, Semester, Grade) lưu trữ thông tin đăng ký học. Lấy SID của các sinh viên đã đăng ký ít nhất một học phần thuộc khoa Dept = 'CS'. Biểu thức đại số quan hệ nào sau đây là đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1104" data-idquest="1104" type="radio" data-stt="333" value="a" />    								<span>﻿πSID(σDept=′CS′(ENROLL⋈COURSE))π_{SID}(σ_{Dept=′CS′}(ENROLL⋈COURSE))πSID​(σDept=′CS′​(ENROLL⋈COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1104" data-idquest="1104" type="radio" data-stt="333" value="b" />    								<span>﻿πSID​(σDept=′CS′​(STUDENT⋈ENROLL))π_{SID}​(σ_{Dept='CS'}​(STUDENT⋈ENROLL))πSID​​(σDept=′CS′​​(STUDENT⋈ENROLL))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1104" data-idquest="1104" type="radio" data-stt="333" value="c" />    								<span>﻿πSID​(σDept=′CS′​(COURSE))π_{SID}​(σ_{Dept='CS'}​(COURSE))πSID​​(σDept=′CS′​​(COURSE))﻿</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1104" data-idquest="1104" type="radio" data-stt="333" value="d" />    								<span>﻿πSID​(ENROLL⋈COURSE)π_{SID}​(ENROLL⋈COURSE)πSID​​(ENROLL⋈COURSE)﻿</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-334" class="item-quest">
					<div class="quest-title">Câu 334 :</div>
					<div class="quest-content">
						<span>Quá trình tối ưu hóa các câu hỏi truy vấn dữ liệu là quá trình</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="408" data-idquest="408" type="radio" data-stt="334" value="a" />    								<span>Chi phí thời gian thực hiện các phép toán là ít nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="408" data-idquest="408" type="radio" data-stt="334" value="b" />    								<span>Cần thiết phải biến đổi các câu hỏi hợp lý</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="408" data-idquest="408" type="radio" data-stt="334" value="c" />    								<span>Biến đổi câu hỏi sao cho chi phí thời gian và sử dụng bộ nhớ là ít nhất</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="408" data-idquest="408" type="radio" data-stt="334" value="d" />    								<span>Kết quả của các phép toán được biểu diễn duy nhất bằng một quan hệ</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-335" class="item-quest">
					<div class="quest-title">Câu 335 :</div>
					<div class="quest-content">
						<span>Khi ánh xạ mối quan hệ N–N có thuộc tính mô tả (như Quantity), lựa chọn đúng là?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1164" data-idquest="1164" type="radio" data-stt="335" value="a" />    								<span>Tạo bảng quan hệ trung gian với khóa là (FK1, FK2) và thêm các thuộc tính mô tả</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1164" data-idquest="1164" type="radio" data-stt="335" value="b" />    								<span>Dùng một khóa ngoại chuỗi để tham chiếu cả hai bảng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1164" data-idquest="1164" type="radio" data-stt="335" value="c" />    								<span>Tạo cột lặp (repeating groups) trong một bảng</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1164" data-idquest="1164" type="radio" data-stt="335" value="d" />    								<span>Gộp thuộc tính mô tả vào một trong hai bảng thực thể</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-336" class="item-quest">
					<div class="quest-title">Câu 336 :</div>
					<div class="quest-content">
						<span>Chọn một khẳng định nào sau đây là đúng nhất khi nói về các phụ thuộc hàm gia tăng</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="353" data-idquest="353" type="radio" data-stt="336" value="a" />    								<span>Có thể mở rộng vế trái hoặc cả hai vế phụ thuộc hàm cùng một thuộc tính</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="353" data-idquest="353" type="radio" data-stt="336" value="b" />    								<span>Có thể mở rộng vế trái, không mở rộng vế phải</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="353" data-idquest="353" type="radio" data-stt="336" value="c" />    								<span>A → B ⇒ AC → B và A → BC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="353" data-idquest="353" type="radio" data-stt="336" value="d" />    								<span>A → B ⇒ A → BC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-337" class="item-quest">
					<div class="quest-title">Câu 337 :</div>
					<div class="quest-content">
						<span>Quy tắc phản xạ trong hệ tiên đề Armstrong</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="232" data-idquest="232" type="radio" data-stt="337" value="a" />    								<span>Nếu A ⊆ B ⇒ A → B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="232" data-idquest="232" type="radio" data-stt="337" value="b" />    								<span>Nếu B ⊆ A ⇒ A ∩ B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="232" data-idquest="232" type="radio" data-stt="337" value="c" />    								<span>Nếu B ⊆ A ⇒ A → B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="232" data-idquest="232" type="radio" data-stt="337" value="d" />    								<span>Nếu B ⊆ A ⇒ B → A</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-338" class="item-quest">
					<div class="quest-title">Câu 338 :</div>
					<div class="quest-content">
						<span>Câu lệnh SQL nào được sử dụng để xóa hoặc loại bỏ mối quan hệ trong cơ sở dữ liệu?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="840" data-idquest="840" type="radio" data-stt="338" value="a" />    								<span>DELETE</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="840" data-idquest="840" type="radio" data-stt="338" value="b" />    								<span>ROLLBACK</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="840" data-idquest="840" type="radio" data-stt="338" value="c" />    								<span>DROP</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="840" data-idquest="840" type="radio" data-stt="338" value="d" />    								<span>REMOVE</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-339" class="item-quest">
					<div class="quest-title">Câu 339 :</div>
					<div class="quest-content">
						<span>Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Các quyền tham chiếu REFERENCE được cấp cho người sử dụng U1 trên thuộc tính branch-name đến quan hệ BRANCH.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="483" data-idquest="483" type="radio" data-stt="339" value="a" />    								<span>GRANT REFERENCE (branch-name) TO U</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="483" data-idquest="483" type="radio" data-stt="339" value="b" />    								<span>GRANT REFERENCE (branch-name) ON BRANCH TO U</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="483" data-idquest="483" type="radio" data-stt="339" value="c" />    								<span>GRANT REFERENCE ON BRANCH TO U</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="483" data-idquest="483" type="radio" data-stt="339" value="d" />    								<span>GRANT REFERENCE (branch-name) ON BRANCH</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-340" class="item-quest">
					<div class="quest-title">Câu 340 :</div>
					<div class="quest-content">
						<span>Given R(A,B,C,D) with F = { AB→C, B→C, C→D }. Considering the functional dependencies in F, which of the following attributes is extraneous on the left-hand side of a functional dependency ? ( Cho R(A,B,C,D) với F = { AB→C, B→C, C→D }. Xét các phụ thuộc hàm trong F, thuộc tính nào sau đây là thừa ở vế trái của một phụ thuộc hàm ? )</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1082" data-idquest="1082" type="radio" data-stt="340" value="a" />    								<span>Không có thuộc tính nào thừa ở vế trái</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1082" data-idquest="1082" type="radio" data-stt="340" value="b" />    								<span>A trong AB→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1082" data-idquest="1082" type="radio" data-stt="340" value="c" />    								<span>C trong C→D</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1082" data-idquest="1082" type="radio" data-stt="340" value="d" />    								<span>B trong AB→C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-341" class="item-quest">
					<div class="quest-title">Câu 341 :</div>
					<div class="quest-content">
						<span>Hãy chuyển từ mô hình ER sang lược đồ Cơ sở dữ liệu? Với mô hình thực thể kết hợp (Mô hình ER) như hình bên.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="624" data-idquest="624" type="radio" data-stt="341" value="a" />    								<span>Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại, ngày nhập học, Mã môn học) Môn học(Mã môn học, tên môn học, thời lượng) GhiDanh(Mã học viên, Mã môn học) Với: khoá chính cuả bảng học viên là Mã học viên Khoá chính cuả bảng "Môn học" là Mã môn học Khoá chính cuả bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="624" data-idquest="624" type="radio" data-stt="341" value="b" />    								<span>Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại) Môn học(Mã môn học, tên môn học, thời lượng) Phiếu Ghi Danh(Mã học viên,Mã môn học,Ngày nhập học ) Với: khoá chính cuả bảng "Học Viên" là Mã học viên Khoá chính cuả bảng "Môn học" là Mã môn học Khoá chính cuả bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="624" data-idquest="624" type="radio" data-stt="341" value="c" />    								<span>Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại, ngày nhập</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="624" data-idquest="624" type="radio" data-stt="341" value="d" />    								<span>Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại, ngày nhập học, mã môn học) Môn học(Mã môn học, tên môn học, thời lượng) Với: khoá chính cuả bảng học viên là Mã học viên Khoá chính cuả bảng "Môn học" là Mã môn học Khoá chính cuả bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-342" class="item-quest">
					<div class="quest-title">Câu 342 :</div>
					<div class="quest-content">
						<span>Ràng buộc dữ liệu là: </span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="770" data-idquest="770" type="radio" data-stt="342" value="a" />    								<span>Các quy tắc, quy định sự liên quan giữa các dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="770" data-idquest="770" type="radio" data-stt="342" value="b" />    								<span>Mối quan hệ giữa các thực thể dữ liệu.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="770" data-idquest="770" type="radio" data-stt="342" value="c" />    								<span>Các định nghĩa, tiên đề, định lý</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="770" data-idquest="770" type="radio" data-stt="342" value="d" />    								<span>Quy tắc biểu diễn cấu trúc dữ liệu</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-343" class="item-quest">
					<div class="quest-title">Câu 343 :</div>
					<div class="quest-content">
						<span>Với F={A→B, B→C}. Phụ thuộc nào không được suy ra?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1204" data-idquest="1204" type="radio" data-stt="343" value="a" />    								<span>C→A</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1204" data-idquest="1204" type="radio" data-stt="343" value="b" />    								<span>A→C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1204" data-idquest="1204" type="radio" data-stt="343" value="c" />    								<span>A→B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1204" data-idquest="1204" type="radio" data-stt="343" value="d" />    								<span>AB→C</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-344" class="item-quest">
					<div class="quest-title">Câu 344 :</div>
					<div class="quest-content">
						<span>Cho CSDL gồm các bảng sau: SinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc) KetQua(MaSV,MaMH,Diem) MonHoc(MaMH,TenMH) Cho câu truy vấn SQL sau: SELECT TenMH FROM MonHoc s,KetQua k WHERE s.MaMH=k.MaMH GROUP BY TenMH HAVING Diem >70 Chọn câu trả lời đúng?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="563" data-idquest="563" type="radio" data-stt="344" value="a" />    								<span>Câu truy vấn trên trả về danh sách tất cả các tên môn học mà sinh viên học có</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="563" data-idquest="563" type="radio" data-stt="344" value="b" />    								<span>Câu truy vấn trên bị lỗi.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="563" data-idquest="563" type="radio" data-stt="344" value="c" />    								<span>Câu truy vấn trên trả về danh sách tất cả các tên môn học.</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="563" data-idquest="563" type="radio" data-stt="344" value="d" />    								<span>Câu truy vấn trên trả về danh sách tất cả các tên môn học mà sinh viên học có điểm lớn hơn 70.</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-345" class="item-quest">
					<div class="quest-title">Câu 345 :</div>
					<div class="quest-content">
						<span>_____ phổ biến bao gồm Access, Oracle, DB2, và SQL Server.</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="513" data-idquest="513" type="radio" data-stt="345" value="a" />    								<span>Các biểu đồ E-R</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="513" data-idquest="513" type="radio" data-stt="345" value="b" />    								<span>Các file dữ liệu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="513" data-idquest="513" type="radio" data-stt="345" value="c" />    								<span>Các DBA</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="513" data-idquest="513" type="radio" data-stt="345" value="d" />    								<span>Các DBMS</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-346" class="item-quest">
					<div class="quest-title">Câu 346 :</div>
					<div class="quest-content">
						<span>Let R(A,B,C,D) with F = {A→B, B→C}. Which of the following is a correct BCNF decomposition of R? (Cho R(A,B,C,D) với F = {A→B, B→C}. Phương án nào sau đây là một phép phân rã đúng về chuẩn BCNF?)</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1048" data-idquest="1048" type="radio" data-stt="346" value="a" />    								<span>{ R1(A,B,C), R2(A,D) }</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1048" data-idquest="1048" type="radio" data-stt="346" value="b" />    								<span>{ R1(B,C), R2(A,B), R3(A,D) }</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1048" data-idquest="1048" type="radio" data-stt="346" value="c" />    								<span>{ R1(A,B), R2(B,C), R3(C,D) }</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1048" data-idquest="1048" type="radio" data-stt="346" value="d" />    								<span>{ R1(A,B,D), R2(B,C) }</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-347" class="item-quest">
					<div class="quest-title">Câu 347 :</div>
					<div class="quest-content">
						<span>Cho lược đồ quan hệ Q(A,B,C,D,E,I) và tập phụ thuộc hàm F={ACD->EBI, CE->AD}. Hỏi Q đạt dạng chuẩn nào?</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="589" data-idquest="589" type="radio" data-stt="347" value="a" />    								<span>Dạng chuẩn 1 (1NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="589" data-idquest="589" type="radio" data-stt="347" value="b" />    								<span>Dạng chuẩn Boyee-Codd (BCNF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="589" data-idquest="589" type="radio" data-stt="347" value="c" />    								<span>Dạng chuẩn 2 (2NF)</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="589" data-idquest="589" type="radio" data-stt="347" value="d" />    								<span>Dạng chuẩn 3 (3NF)</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-348" class="item-quest">
					<div class="quest-title">Câu 348 :</div>
					<div class="quest-content">
						<span>Cho R(A,B,C,D,E,F), F = {AB→C, C→D, D→E, E→A, C→F}. Bao đóng (AB)+ là:</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="1041" data-idquest="1041" type="radio" data-stt="348" value="a" />    								<span>{A, B, C, D, E, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1041" data-idquest="1041" type="radio" data-stt="348" value="b" />    								<span>{A, B, E, F}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1041" data-idquest="1041" type="radio" data-stt="348" value="c" />    								<span>{A, B, C, D}</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="1041" data-idquest="1041" type="radio" data-stt="348" value="d" />    								<span>{A, B, C, D, E}</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-349" class="item-quest">
					<div class="quest-title">Câu 349 :</div>
					<div class="quest-content">
						<span>Kết nối bằng nhau các quan hệ theo thuộc tính là</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="292" data-idquest="292" type="radio" data-stt="349" value="a" />    								<span>Thực hiện phép chiếu và chia</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="292" data-idquest="292" type="radio" data-stt="349" value="b" />    								<span>Thực hiện phép chiếu và phép chọn</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="292" data-idquest="292" type="radio" data-stt="349" value="c" />    								<span>Thực hiện tích Đề Các và phép chiếu</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="292" data-idquest="292" type="radio" data-stt="349" value="d" />    								<span>Thực hiện tích Đề Các và phép chọn</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
								<div id="quest-350" class="item-quest">
					<div class="quest-title">Câu 350 :</div>
					<div class="quest-content">
						<span>Nếu A → BC suy ra</span>
					</div>
					<div class="quest-answer">
                            <div class="answer">
    							<label>
    								<input name="236" data-idquest="236" type="radio" data-stt="350" value="a" />    								<span>A → C</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="236" data-idquest="236" type="radio" data-stt="350" value="b" />    								<span>AB và AC</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="236" data-idquest="236" type="radio" data-stt="350" value="c" />    								<span>A → B</span>
    							</label>
    						</div class="answer">
                            <div class="answer">
    							<label>
    								<input name="236" data-idquest="236" type="radio" data-stt="350" value="d" />    								<span>AC → B và A → CC</span>
    							</label>
    						</div class="answer">
					</div>
				</div>
							<a href="/index.php?action=accept_test" class="btn" onclick="return confirm('Xác nhận nộp bài?')" style="width: 300px;margin-left: 40%;margin-bottom: 20px;">Nộp</a>
		</div>
		<div class="clear"></div>
	</div>
	<script>
		var min = 4320;
		var sec = 00;
		var st = "2026-07-01 02:25:00";
		countdown();
		function msToTime(s) {
			var ms = s % 1000;
			s = (s - ms) / 1000;
			var secs = s % 60;
			s = (s - secs) / 60;
			var mins = s % 60;
			var hrs = (s - mins) / 60;

			return hrs + ':' + mins + ':' + secs;
			}
		$('input[type=radio]').on("change", function () {
			var stt = $(this).data("stt");
			var idquest = $(this).data("idquest");
			var value = $(this).val();
			var data = {
				id: idquest,
				answer: value,
				min: min,
				sec: sec
			}
			var url = "index.php?action=update_answer";
			var success = function (result) {
				$('#tick-' + stt).text("✓");
			};
			$.post(url, data, success);
		})
		var start_time = new Date(st);
		start_time.setHours(start_time.getHours() + 7);
		var end_time = start_time
		end_time.setSeconds(start_time.getSeconds() + (min * 60 + sec));
		console.log(start_time)
		console.log(min)
		console.log(sec)
		console.log(start_time.getSeconds() + (min * 60 + sec))
		console.log(end_time)
		function countdown() {
			cdID = setInterval(function () {
				const date = new Date();
				$('#timer').text(msToTime(end_time-date));
				if (date >= end_time) {
					window.location.replace("/index.php?action=accept_test");
				}
			}, 1000);
		}

		$(window).scroll(function () {
		});
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 65
					}, 500);
					return false;
				}
			}
		});
		window.onbeforeunload = function () {
			var url = "index.php?action=update_timing"
			var data = {
				min: min,
				sec: sec
			}
			var success = function () {};
			$.post(url, data, success);
		}
	</script>
</body>
<script src='res/libs/MathJax/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
</html>
