//核心低 70保核
//核心中or tp足 or 30 回线上
//战斗技
//自身低+tp低 70撤退至4


Eval (user._heXing!==undefined && user._heXing.hpRate()<=0.3 && user.tp>=30 && Math.random()<0.7): Skill 60

Always: Skill 9,

Eval (user._heXing!==undefined && user._heXing.hpRate()<=0.3 && user.tp<=70 && Math.random()<0.7): Skill 60,

Eval (user._heXing!==undefined && user._heXing.hpRate()<=0.3 && user.tp<=70): Skill 10, Highest CORE

Eval (user._heXing!==undefined && user._heXing.hpRate()>=0.3 || user.tp>=70 || Math.random()<0.3): SKILL 64

Always: Skill 1