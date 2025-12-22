package com.cert.study.advanced;

import java.nio.file.Path;
import java.nio.file.Paths;

public class FileNIO2 {
    public static void main(String[] args) {
        // --- TASK 1: THE RELATIVIZE JOURNEY ---
        // Path A is 3 levels deep; Path B is 3 levels deep but in a different branch.
        Path pathA = Paths.get("com/java/cert");
        Path pathB = Paths.get("com/course/notes.txt");

        // TODO: Use relativize to find the path from pathA to pathB.
        System.out.println("Relativize Result: " + "/* apply method here */");
        // CERT TEST: Explain why you see two ".." symbols.

        // --- TASK 2: THE RESOLVE OVERWRITE ---
        Path absolute = Paths.get("/root/bin");
        Path relative = Paths.get("script.sh");

        // TODO: Resolve 'relative' against 'absolute' (Normal joining).
        System.out.println("Normal Resolve: " + "/* apply method here */");

        // TODO: Resolve 'absolute' against 'relative'.
        System.out.println("The Trap Resolve: " + "/* apply method here */");
        // CERT TEST: Why did the output NOT contain "script.sh"?
        // (Recall the rule: If the argument to resolve() is absolute, it is returned as is).

        // --- TASK 3: PATH NORMALIZATION ---
        Path redundant = Paths.get("/a/./b/../../c");
        // TODO: Use the normalize() method on 'redundant'.
        System.out.println("Clean Path: " + "/* apply method here */");
        // CERT TEST: What is the final destination after the ".." symbols execute?
    }
}