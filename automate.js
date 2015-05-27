
function lineDistance(x1, y1, x2, y2) {

    var xs = 0;
    var ys = 0;

    xs = x2 - x1;
    xs = xs * xs;

    ys = y2 - y1;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}




function automata(env, rules, leftx, topy, endx, endy) {


    var env2 = env;
    var rules_b = new Array();
    var rules_s = new Array();
    var rules2_b = new Array();
    var rules2_s = new Array();

    for (br = 0; br < 9; br++) ///   default all rules to 0
    {
        rules_b[br] = 0;
        rules2_b[br] = 0;
    }

    for (sr = 0; sr < 9; sr++) {
        rules_s[sr] = 0;
        rules2_s[sr] = 0;
    }




    if (rules == "city_sprawl") {
        rules_b[4] = 1; //   these are the conditions upon which an empty cell will become full.
        rules_b[5] = 1; // rules_b = born
        rules_b[6] = 1;

        rules_s[2] = 1;
        rules_s[3] = 1; // these are the conditions upon which a full cell will remain full
        rules_s[4] = 1; // rules_s = survive
        rules_s[5] = 1;
        rules_s[6] = 1;
        rules_s[7] = 1;
    }

    if (rules == "city") {
        rules_b[1] = 1;
        rules_b[2] = 1;
        rules_b[3] = 1;

        rules_s[1] = 1;

        rules_s[2] = 1;


        rules_s[4] = 1;

        rules_s[5] = 1;
        rules_s[6] = 1;

        rules_s[7] = 1;
        rules_s[8] = 1;
    }

    if (rules == "chumpy") {
        rules_b[3] = 1;
        rules_b[4] = 1;

        rules_s[4] = 1;

        rules_s[5] = 1;

        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }


    if (rules == "sparse_tech") {
        rules_b[5] = 1;
        rules_b[6] = 1;
        rules_b[7] = 1;

        rules_s[3] = 1;

        rules_s[4] = 1;

        rules_s[5] = 1;

        rules_s[8] = 1;
    }

    if (rules == "eroder") {
        rules_b[6] = 1;
        rules_b[7] = 1;

        rules_s[4] = 1;

        rules_s[3] = 1;

        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }




    if (rules == "off") {

        rules_s[1] = 1;
        rules_s[2] = 1;
        rules_s[3] = 1;
        rules_s[4] = 1;

        rules_s[5] = 1;

        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }

    if (rules == "tiles") {
        rules_b[1] = 1;
        rules_b[2] = 1;
        rules_b[3] = 1;
        rules_b[4] = 1;


        rules_s[1] = 1;

        rules_s[2] = 1;

        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }


    if (rules == "city_cave") {
        rules_b[5] = 1;
        rules_b[6] = 1;
        rules_b[7] = 1;



        rules_s[3] = 1;

        rules_s[4] = 1;

        rules_s[5] = 1;
        rules_s[6] = 1;
        rules_s[8] = 1;
    }



    if (rules == "worm_eaten") {
        rules_b[1] = 1;
        rules_b[2] = 1; //   these are the conditions upon which an empty cell will become full.
        rules_b[4] = 1; // rules_b = born

        // rules_s = survive

        rules_s[3] = 1;

        rules_s[4] = 1;

        rules_s[5] = 1;
        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }


    if (rules == "cave") {

        rules_b[5] = 1; //   these are the conditions upon which an empty cell will become full.
        rules_b[6] = 1; // rules_b = born
        rules_b[7] = 1;

        rules_s[3] = 1;
        rules_s[4] = 1; // these are the conditions upon which a full cell will remain full
        rules_s[5] = 1; // rules_s = survive
        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }


    if (rules == "conways") {

        rules_b[3] = 1; // these are basic conway's life rules


        rules_s[2] = 1; //
        rules_s[3] = 1; ///
    }


    rules2_b[5] = 1;
    rules2_b[6] = 1;
    rules2_b[7] = 1;



    rules2_s[3] = 1;

    rules2_s[4] = 1;

    rules2_s[5] = 1;
    rules2_s[6] = 1;
    rules2_s[8] = 1;

    var default_rules_s = rules_s;

    var default_rules_b = rules_b;




    for (var x_i = leftx; x_i < endx; x_i++) {

        for (var y_i = topy; y_i < endy; y_i++) {

            rules_s = default_rules_s;
            rules_b = default_rules_b;




            var n = 0;
            var t_min = 50;

            if (env[x_i + 1][y_i + 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i + 1][y_i].on == 1) {
                n = n + 1;
            }
            if (env[x_i + 1][y_i - 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i][y_i + 1].on == 1) {
                n = n + 1;
            } // get number of neigbors
            if (env[x_i][y_i - 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i - 1][y_i + 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i - 1][y_i].on == 1) {
                n = n + 1;
            }
            if (env[x_i - 1][y_i - 1].on == 1) {
                n = n + 1;
            }

            if (env[x_i][y_i].on == 0) {

                env2[x_i][y_i].on = 0;


                switch (n) //   apply the results of the rules to a new blank array
                {

                    case 1:
                        if (rules_b[1] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 2:
                        if (rules_b[2] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 3:
                        if (rules_b[3] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 4:
                        if (rules_b[4] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 5:
                        if (rules_b[5] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 6:
                        if (rules_b[6] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 7:
                        if (rules_b[7] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 8:
                        if (rules_b[8] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                }




            }

            if (env[x_i][y_i].on == 1) {
                env2[x_i][y_i].on = 0;

                switch (n) {

                    case 1:
                        if (rules_s[1] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 2:
                        if (rules_s[2] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 3:
                        if (rules_s[3] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 4:
                        if (rules_s[4] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 5:
                        if (rules_s[5] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 6:
                        if (rules_s[6] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 7:
                        if (rules_s[7] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 8:
                        if (rules_s[8] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;


                }


            }


        }


    }

    return env2;


}




function gravity(env) {


    var env2 = env;


    for (var x_i = 2; x_i < env.length - 2; x_i++) {

        for (var y_i = 2; y_i < env[3].length - 2; y_i++) {



            var under = 1;
            under += y_i;


            if (env[x_i][under].on < env[x_i][y_i].on) {
                var holdit2 = env2[x_i][y_i].on;

                env2[x_i][y_i].on = env[x_i][under].on;
                env2[x_i][under].on = holdit2;




            }



        }


    }

    return env2;

}

